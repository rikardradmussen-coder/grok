# Project Phoenix — Google Play launch checklist

**Package:** `com.projectphoenix.app`  
**App name:** Project Phoenix  
**Wrapper root:** `/workspace/phoenix-play-android/`  
**Release AAB (when built):** `/workspace/phoenix-play-android/android/app/build/outputs/bundle/release/app-release.aab`

## Doctrine (locked — store listing)

- Coaching — not legal advice.
- England & Wales.
- Use: **live family-court and social-care process**
- Use: **They do not replace a solicitor.**
- **Banned (must not appear in any listing text):** biased family-court, beat Cafcass, outcome promises.

---

## Short description (≤80 characters)

```
Coaching for fathers in live family-court and social-care process (E&W).
```

Character count: 73. Does not replace a solicitor.

---

## Full description (draft — paste into Play Console)

```
Project Phoenix is coaching for fathers navigating a live family-court and social-care process in England and Wales.

What you get
• Clarity on process language and next steps you can take this week
• Structured coaching with The Council — specialist coaches, not a law firm
• Practical tools for paperwork rhythm, communication, and staying steady under pressure

Important
They do not replace a solicitor. Project Phoenix is coaching and education — not legal advice and not a medical or mental-health service. Always take independent legal advice for your case.

Who it is for
Fathers and co-parents in England & Wales who want calm, process-aware coaching while their matter is live.

Privacy
See the in-app /privacy page on the production site for how we handle data.
```

---

## Founder-only Console steps

1. Create Play Console developer account (~US$25 one-time).
2. Create app → package `com.projectphoenix.app` → default language English (UK).
3. Paste short + full description above (verify banned phrases absent).
4. Privacy policy URL: production host `/privacy` (ShipStatic interim OK for internal testing only).
5. Content rating: coaching / lifestyle — not a medical device.
6. Target audience: 18+.
7. Upload signed AAB → Internal testing track first.
8. Before production: swap `server.url` from ShipStatic to Firebase Hosting or custom domain (ShipStatic expires).

## Digital Asset Links (when using Custom Tabs / TWA-style links)

Host `/.well-known/assetlinks.json` on the production domain with the Play App Signing SHA-256. Capacitor WebView wrapper still benefits from correct package ↔ domain association for deep links.

## Pre-release URL swap

Edit `/workspace/phoenix-play-android/capacitor.config.json`:

```json
"server": {
  "url": "https://YOUR-FIREBASE-OR-DOMAIN/",
  "cleartext": false,
  "androidScheme": "https"
}
```

Then: `npm run build && npx cap sync android` and rebuild the AAB.
