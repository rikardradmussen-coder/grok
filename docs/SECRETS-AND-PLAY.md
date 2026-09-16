# Unlock set-and-forget Play deploys

Repo: https://github.com/rikardradmussen-coder/grok

## 1) Expo token
1. Sign up / sign in at https://expo.dev
2. Access tokens → create token
3. GitHub → grok → Settings → Secrets and variables → Actions → New repository secret
4. Name: `EXPO_TOKEN` · Value: the token

## 2) Play Console app
1. https://play.google.com/console
2. Create app **Project Phoenix** · package `com.projectphoenix.app` · Free
3. Set up Internal testing track

## 3) Play service account secret
1. Play Console → Setup → API access → link Cloud project → create service account with release permissions
2. Download JSON key
3. GitHub secret Name: `GOOGLE_PLAY_SERVICE_ACCOUNT` · Value: full JSON body

## 4) Meanwhile (no secrets needed)
Upload `phoenix-ops/play/app-release.aab` to Internal testing.

## 5) Docs in repo
`README-EAS.md`, `docs/GITHUB-ACTIONS.md`
