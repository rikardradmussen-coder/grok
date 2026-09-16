# EXECUTE NOW — only human clicks left

The repo is pushed, the GitHub Actions workflow is live, and the remaining blocker is the two repository secrets. Do these in order.

## 1) Add the deployment secrets (required for set-and-forget deploys)

Follow `phoenix-ops/play/SECRETS-AND-PLAY.md` to create and add:

- `EXPO_TOKEN`
- `GOOGLE_PLAY_SERVICE_ACCOUNT`

The repo and workflow are already live at https://github.com/rikardradmussen-coder/grok. Do not recreate or repush the workflow.

## 2) Create the Play app and internal-testing track

1. Open https://play.google.com/console
2. Pay the one-time developer fee if you have not already (~US$25)
3. Create app → name **Project Phoenix** → app or game: App → Free
4. Use package `com.projectphoenix.app`, then open **Internal testing** and create the track.

## 3) Optional meanwhile: upload the Android app manually

In **Internal testing → Create release**, upload:

`phoenix-ops/play/app-release.aab` (6.6 MB, package `com.projectphoenix.app`)

Add yourself as a tester and install from the Internal testing link on your phone.

## 4) Paste store listing (same Console session)

From `phoenix-ops/play/STORE-LISTING.md`:
- Short + full description
- Feature graphic: `feature-graphic-1024x500.png`
- Phone screenshots: `screenshots/01-home.png` … `05-tiers.png`

## 5) Firebase sign-in (stable web URL — one paste)

Chief of Staff will send a Firebase login link + Session ID. Sign in, confirm Session ID matches, paste the auth code back in chat. Then Hosting deploy of the polished SPA runs automatically.

## Optional

Claim ShipStatic demo so solicitor links stay up:
https://my.shipstatic.com/claim/bb28e2b656cda6a192c8dc4df921f4d8

## Already finished (do not redo)

- Repo pushed to GitHub and GitHub Actions workflow live
- Embedded polished SPA inside the AAB (no ShipStatic dependency for the app)
- 5 Play screenshots + feature graphic
- Doctrine-locked store listing copy
- Capacitor project `com.projectphoenix.app`
