---
title: 在 Visual Studio Code 中使用代码空间
intro: '您可以将 {% data variables.product.prodname_vs_codespaces %} 扩展连接到您在 {% data variables.product.product_name %} 上的帐户，直接在 {% data variables.product.prodname_vscode %} 代码空间中开发。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### 基本要求

直接在 {% data variables.product.prodname_vscode %} 的代码空间中开发之前，您必须配置 {% data variables.product.prodname_vs_codespaces %} 扩展连接到您的 {% data variables.product.product_name %} 帐户。

1. 使用 {% data variables.product.prodname_vs %} Marketplace 安装 [{% data variables.product.prodname_vs_codespaces %}](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline) 扩展。 更多信息请参阅 {% data variables.product.prodname_vscode %} 文档中的[扩展 Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)。
2. 在 {% data variables.product.prodname_vscode %} 中，从左侧边栏单击 Extensions（扩展）图标。 ![{% data variables.product.prodname_vscode %} 中的 Extensions（扩展）图标](/assets/images/help/codespaces/click-extensions-icon-vscode.png)
3. 在 {% data variables.product.prodname_vs_codespaces %} 下面，单击 Manage（管理）图标，然后单击 **Extension Settings（扩展设置）**。 ![Extension Settings（扩展设置）选项](/assets/images/help/codespaces/select-extension-settings.png)
4. 使用“Vsonline: Account Provider（Vsonline：帐户提供商）”下拉菜单，选择 {% data variables.product.prodname_dotcom %}。 ![设置帐户提供者为 {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/select-account-provider-vscode.png)
{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
6. 如果尚未在标题中选择 {% data variables.product.prodname_codespaces %}，请单击 **{% data variables.product.prodname_codespaces %}**。 ![{% data variables.product.prodname_codespaces %} 标头](/assets/images/help/codespaces/codespaces-header-vscode.png)
7. 单击 **Sign in to view {% data variables.product.prodname_codespaces %}...（登录以查看 Codespaces...）**。 ![登录以查看 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
8. 要授权 {% data variables.product.prodname_vscode %} 访问您在 {% data variables.product.product_name %} 上的帐户，请单击 **Allow（允许）**。
9. 登录 {% data variables.product.product_name %} 以审批扩展。

### 在 {% data variables.product.prodname_vscode %} 中创建代码空间

After you connect your {% data variables.product.product_name %} account to the {% data variables.product.prodname_vs_codespaces %} extension, you can develop in a codespace that you created on {% data variables.product.product_name %} or in {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Click the Add icon, then click **Create New Codespace**. ![The Create new Codespace option in {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)
3. Type, then click the repository's name you want to develop in. ![Searching for repository to create a new {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-repository-vscode.png)
4. Click the branch you want to develop in. ![Searching for a branch to create a new {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-branch-vscode.png)

### 在 {% data variables.product.prodname_vscode %} 中打开代码空间

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 在 Codespaces（代码空间）下，单击您要在其中开发的代码空间。
3. 单击 Connect to Codespace（连接到代码空间）图标。 ![{% data variables.product.prodname_vscode %} 中的连接到代码空间图标](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

### Deleting a codespace in {% data variables.product.prodname_vscode %}

1. Under Codespaces, right-click the codespace you want to delete.
2. In the drop-down menu, click **Delete Codespace**. ![Deleting a codespace in {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/delete-codespace-vscode.png)
