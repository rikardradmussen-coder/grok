import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

// Bundled SPA is copied into assets/www for EAS; WebView loads the local file tree via HTML bootstrap.
const BOOTSTRAP = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Project Phoenix</title>
<style>html,body{margin:0;height:100%;background:#121212;color:#f4efe6;font-family:system-ui}</style>
</head>
<body>
<iframe id="app" style="border:0;width:100%;height:100%" src="./www/index.html"></iframe>
</body>
</html>`;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <WebView
        originWhitelist={['*']}
        allowFileAccess
        allowFileAccessFromFileURLs
        allowingReadAccessToURL="*"
        source={{ html: BOOTSTRAP, baseUrl: 'file:///android_asset/' }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  webview: { flex: 1, backgroundColor: '#121212' },
});
