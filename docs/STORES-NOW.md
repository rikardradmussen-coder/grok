# Project Phoenix → Google Play + App Store

## Already done (do not redo)
- App package: `com.projectphoenix.app`
- Android release AAB built (embedded polished SPA): `phoenix-ops/play/app-release.aab`
- Play listing drafts, screenshots, feature graphic, icon
- GitHub repo with Expo + Capacitor + CI: https://github.com/rikardradmussen-coder/grok
- iOS bundle id configured: `com.projectphoenix.app`

## Only you can unlock (money + identity)

### Google Play (today)
1. https://play.google.com/console — pay one-time ~US$25 developer fee if needed
2. Create app **Project Phoenix** · Free · package `com.projectphoenix.app`
3. Internal testing → **upload app-release.aab** (attached / in chat)
4. Paste listing from `docs/STORE-LISTING.md` + screenshots from `phoenix-ops/play/screenshots/`

### Apple App Store (same week)
1. https://developer.apple.com/programs/ — Apple Developer (~£79/year)
2. App Store Connect → new app · Bundle ID `com.projectphoenix.app`
3. Create Expo token → GitHub secret `EXPO_TOKEN`
4. EAS will build iOS once token exists; then submit from Expo / Asc

### Auto-deploy secrets (GitHub → Settings → Secrets)
- `EXPO_TOKEN` (required for both stores via EAS)
- `GOOGLE_PLAY_SERVICE_ACCOUNT` (Play submit)
- Later: Apple credentials for EAS submit

## Honest blocker
No AI can publish without your Google/Apple developer accounts. Code + binaries + CI are ready. Accounts + first upload are the gate.
