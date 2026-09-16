# GitHub Actions workflow

The Play deploy workflow lives at:
`phoenix-ops/play/_pending-workflow/play-deploy.yml` on the builder machine
until `workflow` OAuth scope is granted, then it will be committed to
`.github/workflows/play-deploy.yml`.

Required secrets after it lands:
- EXPO_TOKEN
- GOOGLE_PLAY_SERVICE_ACCOUNT
