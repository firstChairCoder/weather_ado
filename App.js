import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "@navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="inverted" />
      <RootNavigator />
    </SafeAreaProvider>
  );
}
