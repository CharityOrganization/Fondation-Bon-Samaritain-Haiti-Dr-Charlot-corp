{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}If there is a protected branch rule in your repository that requires a linear commit history, you must allow squash merging, rebase merging, or both. Para obter mais informações, consulte "[Exigindo um histórico de commit linear](/github/administering-a-repository/requiring-a-linear-commit-history)".{% endif %}