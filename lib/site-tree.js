const path = require('path')
const findPage = require('./find-page')
const getApplicableVersions = require('./get-applicable-versions')
const products = Object.values(require('../lib/all-products'))
const { getVersionedPathWithoutLanguage } = require('./path-utils')
const languageCodes = Object.keys(require('./languages'))
const addTitlesToTree = require('./site-tree-titles')
const allVersions = Object.keys(require('./all-versions'))

// This module builds a localized tree of every page on the site
// It includes single-source pages that have different variants
// for different product versions, e.g. dotcom vs GHES
//
// siteTree[languageCode][version].products[productHref].categories[categoryHref].maptopics[maptopicHref].articles
// or if a category has direct child articles:
// siteTree[languageCode][version].products[productHref].categories[categoryHref].articles

module.exports = async function buildSiteTree (pages, site, redirects) {
  const siteTree = {}

  languageCodes.map(languageCode => {
    siteTree[languageCode] = {}

    allVersions.map(version => {
      siteTree[languageCode][version] = {}
      const productTree = {}

      products.map(item => {
        const product = { title: item.name }

        // return early if the product has external docs, like Atom
        if (item.external) {
          product.href = item.href
          product.external = true
          productTree[item.id] = product
          return
        }

        product.href = item.href

        // find the product TOC page and get TOC items
        const page = findPage(item.href, pages, redirects, languageCode)

        product.categories = buildCategoriesTree(page.tocItems, item.href, pages, redirects, version, languageCode)

        productTree[item.id] = product
        return null
      })

      siteTree[languageCode][version].products = productTree
    })
  })

  await addTitlesToTree(siteTree, site)

  return siteTree
}

function buildCategoriesTree (tocItems, productHref, pages, redirects, version, languageCode) {
  const categoryTree = {}

  // for every category in a product TOC...
  tocItems.map(item => {
    const category = {}

    const categoryHref = path.join(productHref, item.href)

    const versionedCategoryHref = getVersionedPathWithoutLanguage(categoryHref, version)
    category.href = versionedCategoryHref

    // find the category TOC page and get its TOC items
    const page = findPage(categoryHref, pages, redirects, languageCode)

    // skip if translated page can't be found
    if (!page && languageCode !== 'en') return

    category.title = page.shortTitle || page.title

    if (!getApplicableVersions(page.versions, page.fullPath).includes(version)) {
      return
    }

    // support standalone pages at the category level, like actions/quickstart.md
    if (!page.tocItems) {
      category.standalone = true
    }

    // TOC items can be maptopics and/or articles
    if (page.tocItems) {
      const hasMaptopics = page.tocItems.some(item => item.type === 'maptopic')

      // if TOC contains maptopics, build a maptopics tree
      // otherwise build an articles tree
      if (hasMaptopics) {
        category.maptopics = buildMaptopicsTree(page.tocItems, categoryHref, pages, redirects, version, languageCode)
      } else {
        category.articles = buildArticlesTree(page.tocItems, categoryHref, pages, redirects, version, languageCode)
      }
    }

    categoryTree[versionedCategoryHref] = category
  })

  return categoryTree
}

function buildMaptopicsTree (tocItems, categoryHref, pages, redirects, version, languageCode) {
  const maptopicTree = {}

  // for every maptopic in a category TOC...
  tocItems
    .filter(item => item.type === 'maptopic')
    .map(item => {
      const maptopic = {}

      const maptopicHref = path.join(categoryHref, item.href)

      const versionedMaptopicHref = getVersionedPathWithoutLanguage(maptopicHref, version)
      maptopic.href = versionedMaptopicHref

      // we already have access to the child articles via the category TOC items
      // but we still need the page to get the available versions
      const page = findPage(maptopicHref, pages, redirects, languageCode)

      // skip if translated page can't be found
      if (!page && languageCode !== 'en') return

      // if this is not a maptopic, return early
      if (!page.mapTopic) return

      if (!getApplicableVersions(page.versions, page.fullPath).includes(version)) {
        return
      }

      const childArticles = getChildArticles(tocItems, item.href)

      maptopic.title = page.title
      maptopic.shortTitle = page.shortTitle
      maptopic.hidden = page.hidden

      // make the child articles accessible to the page object for maptopic rendering
      if (!page.childArticles) page.childArticles = childArticles

      maptopic.articles = buildArticlesTree(childArticles, categoryHref, pages, redirects, version, languageCode)
      maptopicTree[versionedMaptopicHref] = maptopic
    })

  return maptopicTree
}

function buildArticlesTree (tocItems, categoryHref, pages, redirects, version, languageCode) {
  const articleTree = {}

  // REST categories may not have TOC items
  if (!tocItems) return articleTree

  // for every article in a maptopic (or category) TOC...
  tocItems.map(item => {
    const article = {}

    const articleHref = path.join(categoryHref, item.href)

    const versionedArticleHref = getVersionedPathWithoutLanguage(articleHref, version)
    article.href = versionedArticleHref

    const page = findPage(articleHref, pages, redirects, languageCode)

    // skip if translated page can't be found
    if (!page && languageCode !== 'en') return

    article.title = page.shortTitle || page.title

    if (!getApplicableVersions(page.versions, page.fullPath).includes(version)) {
      return
    }

    articleTree[versionedArticleHref] = article
  })

  return articleTree
}

// in a category TOC, get the {% link_in_list %} items under the current {% topic_link_in_list %}
function getChildArticles (tocItems, maptopicPath) {
  let withinMaptopic = false

  return tocItems.filter(item => {
    if (item.type === 'maptopic') {
      if (item.href === maptopicPath) {
        withinMaptopic = true
      } else {
        withinMaptopic = false
      }
    } else {
      if (withinMaptopic) return item.href
    }
  })
}
