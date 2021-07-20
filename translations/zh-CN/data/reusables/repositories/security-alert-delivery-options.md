{% if currentVersion != "github-ae@latest" %}
If your repository has a supported dependency manifest
{% if currentVersion == "free-pro-team@latest" %} (and if you've set up the dependency graph if it's a private repository){% endif %}, whenever {% data variables.product.product_name %} detects a vulnerable dependency in your repository, you will receive a weekly digest email. 您也可以在 {% data variables.product.product_name %} 界面中将安全警报配置为 web 通知、单个电子邮件通知、每日电子邮件摘要或警报。 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。
{% endif %}