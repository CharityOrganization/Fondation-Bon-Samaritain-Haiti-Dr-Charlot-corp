---
title: Dein Sicherheitsprotokoll überprüfen
intro: Du kannst das Sicherheitsprotokoll für Dein Benutzerkonto überprüfen, um Dich betreffende Aktionen besser zu verstehen, die von Dir oder anderen Benutzern durchgeführt wurden.
redirect_from:
  - /articles/reviewing-your-security-log
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Zugriff auf Dein Sicherheitsprotokoll

The security log lists all actions performed within the last 90 days{% if currentVersion ver_lt "enterprise-server@2.20" %}, up to 50{% endif %}.

{% data reusables.user_settings.access_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
2. Klicke in der Seitenleiste für Benutzereinstellungen auf **Security log** (Sicherheitsprotokoll). ![Registerkarte „Security log" (Sicherheitsprotokoll)](/assets/images/help/settings/audit-log-tab.png)
{% else %}
{% data reusables.user_settings.security %}
3. Dein Protokoll wird unter dem Eintrag „Security history“ (Sicherheitsverlauf) angezeigt. ![Sicherheitsprotokoll](/assets/images/help/settings/user_security_log.png)
4. Klicken Sie auf einen Eintrag, um weitere Informationen zum betreffenden Ereignis anzuzeigen. ![Sicherheitsprotokoll](/assets/images/help/settings/user_security_history_action.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Dein Sicherheitsprotokoll durchsuchen

{% data reusables.audit_log.audit-log-search %}

#### Suche nach der Art der durchgeführten Aktion
{% else %}
### Ereignisse im Sicherheitsprotokoll verstehen

Die Aktionen in Deinem Sicherheitsprotokoll sind nach folgenden Kategorien gruppiert:{% endif %}
| Kategoriename                                                               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |{% if currentVersion == "free-pro-team@latest" %}
| `account_recovery_token`                                                    | Umfasst alle Aktivitäten in Verbindung mit dem [Hinzufügen eines Wiederherstellungstokens](/articles/configuring-two-factor-authentication-recovery-methods).                                                                                                                                                                                                                                                                  |
| `Abrechnung`                                                                | Umfasst alle Aktivitäten in Verbindung mit Deinen Abrechnungsinformationen.                                                                                                                                                                                                                                                                                                                                                    |
| `marketplace_agreement_signature (Unterzeichnung Marketplace-Vereinbarung)` | Umfasst alle Aktivitäten in Verbindung mit der Signierung der {% data variables.product.prodname_marketplace %}-Entwicklervereinbarung.                                                                                                                                                                                                                                                                                        |
| `marketplace_listing (Eintrag auf Marketplace)`                             | Umfasst alle Aktivitäten in Verbindung mit dem Eintragen von Apps auf {% data variables.product.prodname_marketplace %}.{% endif %}
| `oauth_access`                                                              | Contains all activities related to [{% data variables.product.prodname_oauth_app %}s](/articles/authorizing-oauth-apps) you've connected with.{% if currentVersion == "free-pro-team@latest" %}
| `payment_method`                                                            | Umfasst alle Aktivitäten in Verbindung mit der Bezahlung Deines {% data variables.product.prodname_dotcom %}-Abonnements.{% endif %}
| `profile_picture`                                                           | Umfasst alle Aktivitäten in Verbindung mit Deinem Profilbild.                                                                                                                                                                                                                                                                                                                                                                  |
| `project (Projekt)`                                                         | Umfasst alle Aktivitäten in Verbindung mit Projektboards.                                                                                                                                                                                                                                                                                                                                                                      |
| `public_key`                                                                | Umfasst alle Aktivitäten in Verbindung mit [Deinen öffentlichen SSH-Schlüsseln](/articles/adding-a-new-ssh-key-to-your-github-account).                                                                                                                                                                                                                                                                                        |
| `repo`                                                                      | Contains all activities related to the repositories you own.{% if currentVersion == "free-pro-team@latest" %}
| `sponsors`                                                                  | Contains all events related to {% data variables.product.prodname_sponsors %} and sponsor buttons (see "[About {% data variables.product.prodname_sponsors %}](/articles/about-github-sponsors)" and "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| `Team`                                                                      | Contains all activities related to teams you are a part of.{% endif %}{% if currentVersion != "github-ae@latest" %}
| `two_factor_authentication`                                                 | Contains all activities related to [two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa).{% endif %}
| `Benutzer`                                                                  | Umfasst alle Aktivitäten in Verbindung mit Deinem Konto.                                                                                                                                                                                                                                                                                                                                                                       |

Eine Beschreibung der Ereignisse dieser Kategorien findest Du nachfolgend.

{% if currentVersion == "free-pro-team@latest" %}

#### Kategorie `account_recovery_token`

| Aktion        | Beschreibung                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| confirm       | Wird ausgelöst, wenn Du [ein neues Token erfolgreich bei einem Wiederherstellungsanbieter speicherst](/articles/configuring-two-factor-authentication-recovery-methods). |
| recover       | Wird ausgelöst, wenn Du [ein Kontowiederherstellungstoken erfolgreich einlöst](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).                      |
| recover_error | Wird ausgelöst, wenn ein Token verwendet wird, {% data variables.product.prodname_dotcom %} dieses aber nicht validieren kann.                                           |

#### Kategorie `billing` (Abrechnung)

| Aktion                | Beschreibung                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| change_billing_type | Wird ausgelöst, wenn Sie Ihre [Zahlungsmethode](/articles/adding-or-editing-a-payment-method) für {% data variables.product.prodname_dotcom %} ändern. |
| change_email          | Wird ausgelöst, wenn Du [Deine E-Mail-Adresse änderst](/articles/changing-your-primary-email-address).                                                 |

#### Kategorie `marketplace_agreement_signature`

| Aktion | Beschreibung                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------- |
| create | Wird ausgelöst, wenn Du die {% data variables.product.prodname_marketplace %}-Entwicklervereinbarung signierst. |

#### Kategorie `marketplace_listing` (Eintrag auf Marketplace)

| Aktion     | Beschreibung                                                                                                                  |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| genehmigen | Wird ausgelöst, wenn Dein Eintrag für die Aufnahme in {% data variables.product.prodname_marketplace %} genehmigt wird.       |
| create     | Wird ausgelöst, wenn Du einen Eintrag für Deine App in {% data variables.product.prodname_marketplace %} erstellst.           |
| delist     | Wird ausgelöst, wenn Ihr Listing von {% data variables.product.prodname_marketplace %} entfernt wird.                         |
| redraft    | Wird ausgelöst, wenn Dein Eintrag in den Entwurfsstatus zurückversetzt wird.                                                  |
| reject     | Wird ausgelöst, wenn Dein Eintrag für die Aufnahme in {% data variables.product.prodname_marketplace %} nicht genehmigt wird. |

{% endif %}

#### Kategorie `oauth_access`

| Aktion  | Beschreibung                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| create  | Wird ausgelöst, wenn Sie einer [{% data variables.product.prodname_oauth_app %} Zugriff erteilen](/articles/authorizing-oauth-apps).                                    |
| destroy | Wird ausgelöst, wenn Sie einer [{% data variables.product.prodname_oauth_app %} den Zugriff auf Ihr Konto entziehen](/articles/reviewing-your-authorized-integrations). |

{% if currentVersion == "free-pro-team@latest" %}

#### Kategorie `payment_method`

| Aktion        | Beschreibung                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| clear         | Wird ausgelöst, wenn eine [registrierte Zahlungsmethode](/articles/removing-a-payment-method) entfernt wird.        |
| create        | Wird ausgelöst, wenn eine Zahlungsmethode, beispielsweise eine Kreditkarte oder ein PayPal-Konto, hinzugefügt wird. |
| aktualisieren | Wird ausgelöst, wenn eine vorhandene Zahlungsmethode geändert wird.                                                 |

{% endif %}

#### Kategorie `profile_picture`

| Aktion        | Beschreibung                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| aktualisieren | Wird ausgelöst, wenn Du [Dein Profilbild festlegst oder änderst](/articles/setting-your-profile-picture/). |

#### Kategorie `project`

| Aktion                   | Beschreibung                                                                                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                 | Wird bei der Erstellung eines Projektboards ausgelöst.                                                                                             |
| `rename`                 | Wird ausgelöst, wenn ein Projektboard umbenannt wird.                                                                                              |
| `aktualisieren`          | Wird ausgelöst, wenn ein Projektboard geändert wird.                                                                                               |
| `delete`                 | Wird ausgelöst, wenn ein Projektboard gelöscht wird.                                                                                               |
| `link`                   | Wird ausgelöst, wenn ein Repository mit einem Projektboard verknüpft wird.                                                                         |
| `unlink`                 | Wird ausgelöst, wenn die Verknüpfung eines Repositorys mit einem Projektboard aufgehoben wird.                                                     |
| `project.access`         | Wird ausgelöst, wenn die Sichtbarkeit eines Projektboards geändert wird.                                                                           |
| `update_user_permission` | Wird ausgelöst, wenn ein externer Mitarbeiter einem Projektboard hinzugefügt oder entfernt wird oder wenn sich seine Berechtigungsebene verändert. |

#### Kategorie `public_key`

| Aktion | Beschreibung                                                                                                                                                                               |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| create | Wird ausgelöst, wenn Sie [Ihrem {% data variables.product.product_name %}-Konto einen neuen öffentlichen SSH-Schlüssel hinzufügen](/articles/adding-a-new-ssh-key-to-your-github-account). |
| delete | Wird ausgelöst, wenn Sie [einen öffentlichen SSH-Schlüssel aus Ihrem {% data variables.product.product_name %}-Konto entfernen](/articles/reviewing-your-ssh-keys).                        |

#### Kategorie `repo`

| Aktion                                | Beschreibung                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access                                | Wird ausgelöst, wenn die Sichtbarkeit eines Repositorys, dessen Inhaber Du bist, [von „privat“ auf „öffentlich“ gesetzt wird](/articles/making-a-private-repository-public) (oder umgekehrt).                                                                                                                                                      |
| add_member                            | Triggered when a {% data variables.product.product_name %} user is {% if currentVersion == "free-pro-team@latest" %}[invited to have collaboration access](/articles/inviting-collaborators-to-a-personal-repository){% else %}[given collaboration access](/articles/inviting-collaborators-to-a-personal-repository){% endif %} to a repository. |
| add_topic                             | Wird ausgelöst, wenn ein Repository-Inhaber einem Repository [ein Thema hinzufügt](/articles/classifying-your-repository-with-topics).                                                                                                                                                                                                             |
| archived                              | Triggered when a repository owner [archives a repository](/articles/about-archiving-repositories).{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| config.disable_anonymous_git_access | Wird ausgelöst, wenn für ein öffentliches Repository der [anonyme Git-Lesezugriff deaktiviert](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) wird.                                                                                                                                           |
| config.enable_anonymous_git_access  | Wird ausgelöst, wenn für ein öffentliches Repository der [anonyme Git-Lesezugriff aktiviert](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) wird.                                                                                                                                             |
| config.lock_anonymous_git_access    | Wird ausgelöst, wenn für ein Repository die [Einstellung für den anonymen Git-Lesezugriff gesperrt](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) wird.                                                                                                                  |
| config.unlock_anonymous_git_access  | Wird ausgelöst, wenn für ein Repository die [Einstellungssperre für den anonymen Git-Lesezugriff aufgehoben](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) wird.{% endif %}
| create                                | Wird ausgelöst, wenn [ein neues Repository erstellt](/articles/creating-a-new-repository) wird.                                                                                                                                                                                                                                                    |
| destroy                               | Triggered when [a repository is deleted](/articles/deleting-a-repository).{% if currentVersion == "free-pro-team@latest" %}
| deaktivieren                          | Triggered when a repository is disabled (e.g., for [insufficient funds](/articles/unlocking-a-locked-account)).{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| aktivieren                            | Wird ausgelöst, wenn ein Repository wieder aktiviert wird.{% endif %}
| remove_member                         | Wird ausgelöst, wenn ein {% data variables.product.product_name %}-Benutzer [als Mitarbeiter aus einem Repository entfernt wird](/articles/removing-a-collaborator-from-a-personal-repository).                                                                                                                                                    |
| remove_topic                          | Wird ausgelöst, wenn ein Repository-Inhaber ein Thema aus einem Repository entfernt.                                                                                                                                                                                                                                                               |
| rename                                | Wird ausgelöst, wenn ein [Repository umbenannt](/articles/renaming-a-repository) wird.                                                                                                                                                                                                                                                             |
| übertragen                            | Wird ausgelöst, wenn ein [Repository übertragen](/articles/how-to-transfer-a-repository) wird.                                                                                                                                                                                                                                                     |
| transfer_start                        | Wird ausgelöst, wenn die Übertragung eines Repositorys initiiert wurde.                                                                                                                                                                                                                                                                            |
| unarchived                            | Wird ausgelöst, wenn ein Repository-Inhaber die Archivierung eines Repositorys aufhebt.                                                                                                                                                                                                                                                            |

{% if currentVersion == "free-pro-team@latest" %}
#### Kategorie `sponsors`

| Aktion                                          | Beschreibung                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| repo_funding_link_button_toggle             | Wird ausgelöst, wenn Du eine Sponsorenschaltfläche in Deinem Repository aktivierst oder deaktivierst (siehe „[Sponsorenschaltfläche in Deinem Repository anzeigen](/articles/displaying-a-sponsor-button-in-your-repository)“)                                                                                                              |
| repo_funding_links_file_action              | Wird ausgelöst, wenn Du die FUNDING-Datei in Deinem Repository änderst (siehe „[Sponsorenschaltfläche in Deinem Repository anzeigen](/articles/displaying-a-sponsor-button-in-your-repository)“)                                                                                                                                            |
| sponsor_sponsorship_cancel                    | Wird ausgelöst, wenn Du ein Sponsoring beendest (siehe „[Sponsoring herabstufen](/articles/downgrading-a-sponsorship)“)                                                                                                                                                                                                                     |
| sponsor_sponsorship_create                    | Wird ausgelöst, wenn Du einen Entwickler unterstützt (siehe „[Unterstützen eines Open-Source-Mitarbeiters](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor#sponsoring-a-developer)")                                                                                                |
| sponsor_sponsorship_preference_change         | Wird ausgelöst, wenn Du Deine Einstellung zum Empfangen von E-Mail-Updates von einem unterstützten Entwickler änderst (siehe „[Dein Sponsoring verwalten](/articles/managing-your-sponsorship)“)                                                                                                                                            |
| sponsor_sponsorship_tier_change               | Wird ausgelöst, wenn Du Dein Sponsoring herauf- oder herabstufst (siehe „[Sponsoring heraufstufen](/articles/upgrading-a-sponsorship)“ und „[Sponsoring herabstufen](/articles/downgrading-a-sponsorship)“)                                                                                                                                 |
| sponsored_developer_approve                   | Wird ausgelöst, wenn Dein {% data variables.product.prodname_sponsors %}-Konto genehmigt ist (siehe „[{% data variables.product.prodname_sponsors %} für Dein Benutzerkonto aufsetzen](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                                |
| sponsored_developer_create                    | Wird aufgelöst, wenn Dein {% data variables.product.prodname_sponsors %}-Konto erstellt wird (siehe „[{% data variables.product.prodname_sponsors %} für Dein Benutzerkonto aufsetzen](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                                |
| sponsored_developer_profile_update            | Wird ausgelöst, wenn Du Dein „unterstützter Benutzer"-Profil veränderst (siehe „[Deine Profildetails für {% data variables.product.prodname_sponsors %} verändern](/github/supporting-the-open-source-community-with-github-sponsors/editing-your-profile-details-for-github-sponsors)")                                                    |
| sponsored_developer_request_approval          | Wird ausgelöst, wenn Du Deine Bewerbung für {% data variables.product.prodname_sponsors %} für die Bewilligung einreichst (siehe „[{% data variables.product.prodname_sponsors %} für Dein Benutzerkonto aufsetzen](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")   |
| sponsored_developer_tier_description_update | Wird ausgelöst, wenn Du die Beschreibung einer Sponsoring-Stufe änderst (siehe „[Sponsoring-Stufen ändern](/articles/changing-your-sponsorship-tiers)“)                                                                                                                                                                                     |
| sponsored_developer_update_newsletter_send  | Wird ausgelöst, wenn Du Deinen Sponsoren einen E-Mail-Update sendest (siehe „[Sponsoren kontaktieren](/articles/contacting-your-sponsors)“)                                                                                                                                                                                                 |
| waitlist_invite_sponsored_developer           | Wird ausgelöst, wenn Du eingeladen wirst, {% data variables.product.prodname_sponsors %} von der Warteliste her beizutreten (siehe „[{% data variables.product.prodname_sponsors %} für Dein Benutzerkonto aufsetzen](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)") |
| waitlist_join                                   | Wird ausgelöst, wenn Du der Warteliste beitrittst, um ein „unterstützter Entwickler" zu werden (siehe [{% data variables.product.prodname_sponsors %} für Dein Benutzerkonto aufsetzen](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                               |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### Kategorie `successor_invitation`

| Aktion  | Beschreibung                                                                                                                                                                                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| accept  | Wird ausgelöst, wenn du eine Erneuerungseinladung annimmst (siehe „[Inhaber-Kontinuität Deiner Benutzerkonto-Repositorys aufrechterhalten](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")     |
| cancel  | Wird ausgelöst, wenn du eine Erneuerungseinladung kündigst (siehe „[Inhaber-Kontinuität Deiner Benutzerkonto-Repositorys aufrechterhalten](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")     |
| create  | Wird ausgelöst, wenn du eine Erneuerungseinladung erstellst (siehe „[Inhaber-Kontinuität Deiner Benutzerkonto-Repositorys aufrechterhalten](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")    |
| decline | Wird ausgelöst, wenn du eine Erneuerungseinladung ablehnst (siehe „[Inhaber-Kontinuität Deiner Benutzerkonto-Repositorys aufrechterhalten](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")     |
| revoke  | Wird ausgelöst, wenn du eine Erneuerungseinladung zurückziehst (siehe „[Inhaber-Kontinuität Deiner Benutzerkonto-Repositorys aufrechterhalten](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)") |
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

#### Kategorie `team`

| Aktion            | Beschreibung                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| add_member        | Wird ausgelöst, wenn ein Mitglied einer Organisation, zu der Du gehörst, [Dich zu einem Team hinzufügt](/articles/adding-organization-members-to-a-team).          |
| add_repository    | Wird ausgelöst, wenn ein Team, dessen Mitglied Du bist, die Kontrolle über ein Repository erhält.                                                                  |
| create            | Wird ausgelöst, wenn in einer Organisation, zu der Du gehörst, ein neues Team erstellt wird.                                                                       |
| destroy           | Wird ausgelöst, wenn ein Team, dessen Mitglied Du bist, aus einer Organisation gelöscht wird.                                                                      |
| remove_member     | Wird ausgelöst, wenn ein Mitglied einer Organisation [aus einem Team entfernt wird](/articles/removing-organization-members-from-a-team), dessen Mitglied Du bist. |
| remove_repository | Wird ausgelöst, wenn ein Repository nicht mehr unter der Kontrolle eines Teams steht.                                                                              |

{% endif %}

{% if currentVersion != "github-ae@latest" %}
#### Kategorie `two_factor_authentication`

| Aktion   | Beschreibung                                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| enabled  | Wird bei der Aktivierung der [Zwei-Faktor-Authentifizierung](/articles/securing-your-account-with-two-factor-authentication-2fa) ausgelöst. |
| disabled | Wird bei der Deaktivierung der Zwei-Faktor-Authentifizierung ausgelöst.                                                                     |
{% endif %}

#### Kategorie `user`

| Aktion                             | Beschreibung                                                                                                                                                                                  |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| add_email                          | Triggered when you {% if currentVersion != "github-ae@latest" %}[add a new email address](/articles/changing-your-primary-email-address){% else %}add a new email address{% endif %}.         |
| create                             | Wird ausgelöst, wenn Sie ein neues Benutzerkonto erstellen.                                                                                                                                   |
| remove_email                       | Wird ausgelöst, wenn Sie eine E-Mail-Adresse entfernen.                                                                                                                                       |
| rename                             | Triggered when you rename your account.{% if currentVersion != "github-ae@latest" %}
| change_password                    | Wird ausgelöst, wenn Sie Ihr Passwort ändern.                                                                                                                                                 |
| forgot_password                    | Triggered when you ask for [a password reset](/articles/how-can-i-reset-my-password).{% endif %}
| login                              | Wird ausgelöst, wenn Du Dich bei {% data variables.product.product_location %} anmeldest.                                                                                                     |
| failed_login                       | Triggered when you failed to log in successfully.{% if currentVersion != "github-ae@latest" %}
| two_factor_requested             | Triggered when {% data variables.product.product_name %} asks you for [your two-factor authentication code](/articles/accessing-github-using-two-factor-authentication).{% endif %}
| show_private_contributions_count | Wird ausgelöst, wenn Sie [private Beiträge in Ihrem Profil veröffentlichen](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).                                      |
| hide_private_contributions_count | Triggered when you [hide private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% if currentVersion == "free-pro-team@latest" %}
| report_content                     | Wird ausgelöst, wenn Sie [ein Issue oder einen Pull Request bzw. einen Kommentar zu einem Issue, einem Pull Request oder einem Commit melden](/articles/reporting-abuse-or-spam).{% endif %}

#### Kategorie `user_status`

| Aktion        | Beschreibung                                                                                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aktualisieren | Wird ausgelöst, wenn Sie den Status Ihres Profils festlegen oder ändern. Weitere Informationen findest Du unter „[Status festlegen](/articles/personalizing-your-profile/#setting-a-status).“ |
| destroy       | Wird ausgelöst, wenn Sie den Status Ihres Profils löschen.                                                                                                                                    |

{% if currentVersion == "free-pro-team@latest" %}

### Dein Sicherheitsprotokoll exportieren

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}
