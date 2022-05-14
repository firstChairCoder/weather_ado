import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//screens
import { HomeScreen } from "@screens/HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
