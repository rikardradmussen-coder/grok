# GitHub Actions — Automated Google Play Deployment

Workflow: `.github/workflows/play-deploy.yml`

Runs on every push to `main`: npm install → EAS Android production build → submit to Play Internal.

## Required repo secrets

Settings → Secrets and variables → Actions:

1. `EXPO_TOKEN` — from https://expo.dev → Access tokens
2. `GOOGLE_PLAY_SERVICE_ACCOUNT` — full JSON of a Play Console service account with release access

## Package

`com.projectphoenix.app`
