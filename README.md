# Project Phoenix

England & Wales help group app — coaching, not legal advice.

## What's in this repo

| Path | What |
|------|------|
| `/` (Expo) | Expo + EAS Google Play auto-deploy (`com.projectphoenix.app`) |
| `capacitor/` | Capacitor Android wrap with embedded polished SPA (manual AAB path) |
| `.github/workflows/play-deploy.yml` | EAS build + Play Internal submit on push to `main` |

## Package

`com.projectphoenix.app`

## Secrets for Actions

- `EXPO_TOKEN`
- `GOOGLE_PLAY_SERVICE_ACCOUNT`

See `README-EAS.md` and `docs/GITHUB-ACTIONS.md`.
