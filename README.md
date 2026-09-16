# Project Phoenix — Expo + EAS Google Play pipeline

Automated Android production builds on every push to `main`.

| Item | Value |
|------|--------|
| App name | Project Phoenix |
| Android package | `com.projectphoenix.app` |
| Build | EAS production AAB |
| Submit track | Google Play **internal** |

## One-time founder setup

1. Create an [Expo](https://expo.dev) account and a project linked to this repo (`eas init` / dashboard).
2. Create an Expo access token → GitHub repo **Settings → Secrets → Actions**:
   - `EXPO_TOKEN`
3. In Google Play Console: create app **Project Phoenix**, package `com.projectphoenix.app`, Internal testing track.
4. Create a Play Console service account with release access → download JSON → GitHub secret:
   - `GOOGLE_PLAY_SERVICE_ACCOUNT` (full JSON body)
5. Push to `main`. The workflow builds and attempts submit.

## Local commands

```bash
npm install
npm run build:android
npm run submit:android
```

## Notes

- Workflow uses `node-version: '20'` (not `node-spec`).
- Package is `com.projectphoenix.app` (not a placeholder).
- Never commit `pc-api-key.json` or keystores.
