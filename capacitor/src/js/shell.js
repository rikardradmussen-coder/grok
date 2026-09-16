import { SplashScreen } from '@capacitor/splash-screen';

try {
  await SplashScreen.hide();
} catch {
  // Web preview: SplashScreen may be unavailable
}
