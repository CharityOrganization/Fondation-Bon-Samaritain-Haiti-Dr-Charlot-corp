| Schlüssel     | Typ      | Beschreibung                                                                |
| ------------- | -------- | --------------------------------------------------------------------------- |
| `action`      | `string` | die Aktion, die durchgeführt wurde. Can be one of:<ul><li>`created` - Someone installs a {% data variables.product.prodname_github_app %}.</li><li>`deleted` - Someone uninstalls a {% data variables.product.prodname_github_app %}</li>{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}<li>`suspend` - Someone suspends a {% data variables.product.prodname_github_app %} installation.</li><li>`unsuspend` - Someone unsuspends a {% data variables.product.prodname_github_app %} installation.</li>{% endif %}<li>`new_permissions_accepted` - Someone accepts new permissions for a {% data variables.product.prodname_github_app %} installation. When a {% data variables.product.prodname_github_app %} owner requests new permissions, the person who installed the {% data variables.product.prodname_github_app %} must accept the new permissions request. </li></ul> |
| `repositorys` | `array`  | An array of repository objects that the insatllation can access.            |