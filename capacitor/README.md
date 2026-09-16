# Project Phoenix — Capacitor Android (Play-ready wrapper)

Wraps the live HTTPS web app in a Capacitor Android shell for Google Play.

| Item | Value |
|------|--------|
| App name | Project Phoenix |
| Application ID | `com.projectphoenix.app` |
| Project path | `/workspace/phoenix-play-android/` |
| Interim `server.url` | `https://floating-void-w8gaz8f.shipstatic.com/` |
| Android module | `/workspace/phoenix-play-android/android/` |
| Expected AAB | `android/app/build/outputs/bundle/release/app-release.aab` |

## Important before store release

ShipStatic URLs expire. Before production on Play, point `server.url` in `capacitor.config.json` at **Firebase Hosting** (`*.web.app`) or your **custom domain**, then `npm run build && npx cap sync android` and cut a new signed AAB.

Cleartext HTTP is disabled (`usesCleartextTraffic=false`, `server.cleartext=false`). `allowBackup` is `false`.

## Prerequisites

- Node.js 20+ (npm)
- JDK 17+
- Android SDK (API 35 / build-tools) with `ANDROID_HOME` set
- Upload keystore for release signing

### Install Android SDK (command-line, noninteractive)

```bash
# Example layout used on this box:
export ANDROID_HOME=/workspace/android-sdk
export JAVA_HOME=/workspace/jdk/$(ls /workspace/jdk | head -1)   # after Temurin unpack
mkdir -p "$ANDROID_HOME/cmdline-tools"
# Download cmdline-tools from https://developer.android.com/studio#command-line-tools-only
# unzip into $ANDROID_HOME/cmdline-tools/latest
yes | "$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager" --sdk_root="$ANDROID_HOME" \
  "platform-tools" "platforms;android-35" "build-tools;35.0.0"
```

## Dev / sync

```bash
cd /workspace/phoenix-play-android
npm install
npm run build
npx cap sync android
```

## Signing (upload key)

1. Generate once (founder machine; keep offline backup — never commit):

```bash
keytool -genkeypair -v -keystore phoenix-upload.jks -keyalg RSA -keysize 2048 \
  -validity 10000 -alias phoenix
```

2. Copy `android/key.properties.example` → `android/key.properties` and fill paths/passwords.
3. `key.properties` and `*.jks` are gitignored.

## Build release AAB

```bash
cd /workspace/phoenix-play-android
npm run build && npx cap sync android
cd android
./gradlew bundleRelease
# Output:
# app/build/outputs/bundle/release/app-release.aab
```

If `key.properties` is missing, Gradle still produces an **unsigned** bundle (or fails signing). Play Console requires a signed AAB (Play App Signing recommended).

## Upload to Play

1. Play Console → app → Testing → Internal testing → Create release → upload AAB.
2. Add testers → promote to closed/open → production when ready.
3. Store copy: see `PLAY-LAUNCH.md` (doctrine-locked).

## Hardening already applied

- `INTERNET` permission
- `android:usesCleartextTraffic="false"`
- `network_security_config` cleartext denied
- `android:allowBackup="false"` + data extraction excludes
- Package / namespace: `com.projectphoenix.app`

## Related ops docs

- `/workspace/phoenix-ops/PLAY-LAUNCH-FOUNDER.md` — founder Console checklist
- `/workspace/phoenix-ops/CANONICAL-URL.md` — live site URL

## Box build status (2026-09-15)

**AAB built successfully.**

| Toolchain | Path |
|-----------|------|
| JDK 21 (Temurin) | `/workspace/jdk/jdk-21.0.12.1+1` |
| Android SDK | `/workspace/android-sdk` |
| Release AAB | `/workspace/phoenix-play-android/android/app/build/outputs/bundle/release/app-release.aab` |
| Upload keystore (box-temp; replace for Play) | `/workspace/phoenix-play-android/phoenix-upload.jks` |
| key.properties (gitignored) | `/workspace/phoenix-play-android/android/key.properties` |

Capacitor Android 7 requires **JDK 21** (`invalid source release: 21` with JDK 17).

Rebuild:

```bash
export JAVA_HOME=/workspace/jdk/jdk-21.0.12.1+1
export ANDROID_HOME=/workspace/android-sdk
export PATH="$JAVA_HOME/bin:$PATH"
cd /workspace/phoenix-play-android && npm run build && npx cap sync android
cd android && ./gradlew bundleRelease
```

**Founder note:** The box keystore password is temporary for scaffolding. Generate a new upload key on a secure machine before production Play upload; do not reuse `phoenix-box-temp`.
