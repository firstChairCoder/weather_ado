import React from "react";
import { Text, View } from "react-native";

export const OnboardingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "papayawhip",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{ fontSize: 32, fontFamily: "Bold" }}>Blues</Text>
      <Text style={{ fontSize: 16, fontFamily: "Light" }}>Clues</Text>
    </View>
  );
};
