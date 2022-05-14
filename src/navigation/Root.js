import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import { OnboardingScreen } from "@screens/OnboardingScreen";

import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="MainTab" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
