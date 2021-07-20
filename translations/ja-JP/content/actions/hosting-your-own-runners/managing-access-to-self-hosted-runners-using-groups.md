---
title: グループを使用してセルフホストランナーへのアクセスを管理する
intro: ポリシーを使用して、Organization または Enterprise に追加されたセルフホストランナーへのアクセスを制限できます。
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### セルフホストランナーのグループについて

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**注釈:** すべての Organization には、単一のデフォルトのセルフホストランナーグループがあります。 追加のセルフホストランナーグループの作成と管理は、Enterprise アカウント、および Enterprise アカウントが所有する Organization でのみ使用できます。

{% endnote %}
{% endif %}

セルフホストランナーグループは、Organization レベルおよび Enterprise レベルでセルフホストランナーへのアクセスを制御するために使用されます。 Enterprise の管理者は、Enterprise 内のどの Organization がランナーグループにアクセスできるかを制御するアクセスポリシーを設定できます。 Organization の管理者は、Organization 内のどのリポジトリがランナーグループにアクセスできるかを制御するアクセスポリシーを設定できます。

Enterprise の管理者が Organization にランナーグループへのアクセスを許可すると、Organization の管理者は、Organization のセルフホストランナー設定にリストされたランナーグループを表示できます。 Organization の管理者は、追加の詳細なリポジトリアクセスポリシーを Enterprise ランナーグループに割り当てることができます。

新しいランナーが作成されると、それらは自動的にデフォルトグループに割り当てられます。 ランナーは一度に1つのグループにのみ参加できます。 ランナーはデフォルトグループから別のグループに移動できます。 詳しい情報については、「[セルフホストランナーをグループに移動する](#moving-a-self-hosted-runner-to-a-group)」を参照してください。

### Organization のセルフホストランナーグループを作成する

すべての Organization には、単一のデフォルトのセルフホストランナーグループがあります。 Enterprise アカウント内の Organization は、追加のセルフホストグループを作成できます。 Organization の管理者は、個々のリポジトリにランナーグループへのアクセスを許可できます。

セルフホストランナーは、作成時にデフォルトグループに自動的に割り当てられ、一度に 1 つのグループのメンバーになることができます。 ランナーはデフォルトグループから作成した任意のグループに移動できます。

グループを作成する場合、ランナーグループにアクセスできるリポジトリを定義するポリシーを選択する必要があります。 ランナーグループを設定して、リポジトリの特定のリスト、すべてのプライベートリポジトリ、または Organization 内のすべてのリポジトリにアクセスできます。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. [**Self-hosted runners**] セクションで、[**Add new**] をクリックし、次に [**New group**] をクリックします。

    ![新しいランナーを追加](/assets/images/help/settings/actions-org-add-runner-group.png)
1. ランナーグループの名前を入力し、[**Repository access**] ドロップダウンリストからアクセスポリシーを選択します。

    ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. [**Save group**] をクリックしてグループを作成し、ポリシーを適用します。

### Enterprise のセルフホストランナーグループを作成する

Enterprise は、セルフホストランナーをグループに追加して、アクセス管理を行うことができます。 Enterprise は、Enterprise アカウント内の特定の Organization がアクセスできるセルフホストランナーのグループを作成できます。 Organization の管理者は、追加の詳細なリポジトリアクセスポリシーを Enterprise ランナーグループに割り当てることができます。

セルフホストランナーは、作成時にデフォルトグループに自動的に割り当てられ、一度に 1 つのグループのメンバーになることができます。 登録処理中にランナーを特定のグループに割り当てることも、後でランナーをデフォルトグループからカスタムグループに移動することもできます。

グループを作成するときは、Enterprise 内のすべての Organization にアクセスを付与するポリシーを選択するか、特定の Organization を選択する必要があります。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. [**Self-hosted runners**] タブをクリックします。
1. [**Add new**] をクリックしてから、[**New group**] をクリックします。

    ![新しいランナーを追加](/assets/images/help/settings/actions-enterprise-account-add-runner-group.png)
1. ランナーグループの名前を入力し、[**Organization access**] ドロップダウンリストからアクセスポリシーを選択します。

    ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
1. [**Save group**] をクリックしてグループを作成し、ポリシーを適用します。

### セルフホストランナーグループのアクセスポリシーを変更する

ランナーグループのアクセスポリシーを更新したり、ランナーグループの名前を変更したりすることができます。

{% data reusables.github-actions.self-hosted-runner-configure-runner-group-access %}

### セルフホストランナーをグループに移動する

新しいセルフホストランナーは自動的にデフォルトグループに割り当てられ、その後、別のグループに移動できます。

1. 設定ページの [**Self-hosted runners**] セクションで、グループを移動するランナーの現在のグループを見つけ、グループメンバーのリストを展開します。 ![ランナーグループのメンバーを表示](/assets/images/help/settings/actions-org-runner-group-members.png)
1. セルフホストランナーの横にあるチェックボックスを選択し、[**Move to group**] をクリックして、利用可能な移動先を確認します。 ![ランナーグループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move.png)
1. 移動先のグループをクリックして、ランナーを移動します。 ![ランナーグループのメンバーを移動](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)

### セルフホストランナーグループを削除する

セルフホストランナーは、グループが削除されると自動的にデフォルトグループに戻ります。

1. 設定ページの [**Self-hosted runners**] セクションで、削除するグループを見つけて、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ボタンをクリックします。 ![ランナーグループの設定を表示](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. グループを削除するには、[**Remove group**] をクリックします。 ![ランナーグループの設定を表示](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. 確認プロンプトを確認し、[**Remove this runner group**] をクリックします。
