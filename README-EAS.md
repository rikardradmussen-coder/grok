# EAS + Play secrets checklist

1. `EXPO_TOKEN` — Expo account → Access tokens
2. `GOOGLE_PLAY_SERVICE_ACCOUNT` — Play Console API access JSON
3. Play app package must match `com.projectphoenix.app`
4. First Internal testing release may need a manual Console create-app click
5. After secrets exist, every push to `main` runs `.github/workflows/play-deploy.yml`
