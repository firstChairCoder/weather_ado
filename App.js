import React from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  useFonts
} from "@expo-google-fonts/nunito";
import {
  SourceSerifPro_600SemiBold,
  SourceSerifPro_700Bold
} from "@expo-google-fonts/source-serif-pro";
import AppLoading from "expo-app-loading";
import { RootNavigator } from "@navigation";

LogBox.ignoreLogs([
  "expo-app-loading is deprecated in favor of expo-splash-screen"
]);

export default function App() {
  let [fontsLoaded] = useFonts({
    Light: Nunito_300Light,
    Regular: Nunito_400Regular,
    Medium: Nunito_500Medium,
    SemiBold: SourceSerifPro_600SemiBold,
    Bold: SourceSerifPro_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="inverted" />
      <RootNavigator />
    </SafeAreaProvider>
  );
}
