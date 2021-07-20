---
title: ワークフローを Organization と共有する
shortTitle: ワークフローを Organization と共有する
intro: 'ワークフローテンプレート、シークレット、およびセルフホストランナーを共有することで、Organization 機能を使用して Team とコラボレーションする方法を学びます。'
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### 概要

ワークフローやその他の {% data variables.product.prodname_actions %} 機能を Team と共有する必要がある場合は、{% data variables.product.prodname_dotcom %} Organization 内でのコラボレーションを検討します。 An organization allows you to centrally store and manage secrets, artifacts, and self-hosted runners. `.github` リポジトリにワークフローテンプレートを作成して、Organization 内の他のユーザと共有することもできます。

### ワークフロー テンプレートの作成

ワークフローテンプレートは、組織の `.github` リポジトリへの書き込みアクセス権を持つユーザーによって作成できます。 その後、ワークフローを作成する権限を持つ組織メンバーがテンプレートを使用できます。 ワークフロー テンプレートを使用すると、組織のパブリック リポジトリに新しいワークフローを作成できます。テンプレートを使用してプライベートリポジトリにワークフローを作成するには、組織がエンタープライズプランまたはGitHub Oneプランの一部である必要があります。

この手順では、ワークフロー テンプレートとメタデータ ファイルを作成する方法を示します。 メタデータ ファイルには、ユーザーが新しいワークフローを作成するときにテンプレートがどのように表示されるかについて説明します。

1. 存在しない場合は、組織内で .github</code> `という名前の新しいパブリック リポジトリを作成します。</li>
<li>ワークフロー テンプレートという名前のディレクトリ <code>作成`。
1. `ワークフローテンプレート` ディレクトリ内に新しいワークフローファイルを作成します。

   リポジトリのデフォルトブランチを参照する必要がある場合は、 `$default-branch` プレースホルダを使用できます。 テンプレートを使用してワークフローを作成すると、プレースホルダはリポジトリのデフォルトブランチの名前に自動的に置き換えられます。

   たとえば、octo-organization-ci.yml</code> `名前のこのファイルは、基本的なワークフローを示しています。
<pre><code class="yaml">   name: Octo Organization CI

   :
     プッシュ:
       ブランチ: [ $default-ブランチ ]
     pull_request:
       ブランチ: [ $default-ブランチ]

   ジョブ:
     ビルド:
       実行: ubuntu-最新

       ステップ:
       - 使用: アクション/checkout@v2

       - 名前: 1 行スクリプトを実行
         実行します: Octo Organization から hello をエコーします
`</pre>
1. `ワークフローテンプレート` ディレクトリ内にメタデータファイルを作成します。 メタデータ ファイルは、ワークフロー ファイルと同じ名前である必要がありますが、 `.yml` 拡張子の代わりに、 `.properties.json`を付ける必要があります。 たとえば、octo-organization-ci.properties.json `名前のこのファイルには` 、octo-organization-ci.yml</code>`名前のワークフローファイルのメタデータが含まれています。
<pre><code class="yaml">   { "名前"
       " " " " " " " " " "説明"
       " "説明" " " "" "アイコン"
       " "example-icon"
       "" "  "" "
       " " [
           "go"  ]
       "filePatterns" [
           "package.json$" 」
   
       
           、
           "^Dockerfile"
`</pre>
   * `名` - 必須 **。** ワークフロー テンプレートの名前。 これは、使用可能なテンプレートの一覧に表示されます。
   * `説明` - 必須 **。** ワークフロー テンプレートの説明。 これは、使用可能なテンプレートの一覧に表示されます。
   * `アイコン名前` - 必須 **。** テンプレート リスト内のワークフローのエントリのアイコンを定義します。 `iconName` は、同じ名前の SVG アイコンである必要があり、 `ワークフローテンプレート` ディレクトリに格納する必要があります。 たとえば、example-icon.svg</code> `名前の SVG ファイルは、 <code>例アイコン`として参照されます。
   * `カテゴリ` - オプション **。** ワークフローの言語カテゴリを定義します。 ユーザーが使用可能なテンプレートを表示すると、同じ言語に一致するテンプレートの機能が顕著になります。 使用可能な言語カテゴリについては、「https://github.com/github/linguist/blob/master/lib/linguist/languages.yml」を参照してください。
   * `ファイルパターン` - オプション **。** 定義された正規表現に一致するファイルがユーザーのリポジトリのルート ディレクトリにある場合に、テンプレートを使用できるようにします。

別のワークフロー テンプレートを追加するには、同じ `ワークフロー テンプレート` ディレクトリにファイルを追加します。 例:

![ワークフロー テンプレート ファイル](/assets/images/help/images/workflow-template-files.png)

### ワークフロー テンプレートの使用

この手順では、組織のメンバーがワークフロー テンプレートを検索して使用して新しいワークフローを作成する方法を示します。 組織のワークフロー テンプレートは、組織のメンバーであるすべてのユーザーが使用できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. リポジトリに既存のワークフローが既に存在する場合: 左上隅にある [新しいワークフロー</strong>**] をクリックします。 ![新規ワークフローの選択](/assets/images/help/repository/actions-new-workflow.png)</p></li>
1
組織のワークフロー テンプレートは、組織名で作成されたワークフロー</em>"というタイトルの独自 _セクションにあります。 使いたいテンプレート名の下で、**Set up this workflow（このワークフローをセットアップする）**をクリックしてください。 ![このワークフローを設定します](/assets/images/help/settings/actions-create-starter-workflow.png)</p></li> </ol>


### Organization 内でシークレットを共有する

Organization 内でシークレットを一元管理し、選択したリポジトリで使用できるようにすることができます。 これは、1 つの場所でシークレットを更新し、その変更をシークレットを使用するすべてのリポジトリワークフローに適用できるということを示します。

組織でシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. [新しいシークレット ****] をクリックします。
1. [名前]</strong> 入力ボックスにシークレットの名前 **入力します。</li>
1 シークレットの **値** を入力します。
1 [ **リポジトリアクセス** ドロップダウン リストから、アクセス ポリシーを選択します。
1 [**Add secret**] をクリックします。</ol>

### Organization 内でセルフホストランナーを共有する

Organization の管理者は、セルフホストランナーをグループに追加してから、グループにアクセスできるリポジトリを制御するポリシーを作成できます。

詳しい情報については、「[グループを使用したセルフホストランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。


### 次のステップ

{% data variables.product.prodname_actions %} の詳細については、「[{% data variables.product.prodname_actions %} のセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions)」を参照してください。
