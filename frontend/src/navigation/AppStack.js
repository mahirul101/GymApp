import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Main from "../pages/Main";
import Sessions from "../pages/Sessions";
import Calendar from "../pages/Calendar";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Main">{() => <Main />}</Tab.Screen>
        <Tab.Screen name="Create Session">{() => <Sessions />}</Tab.Screen>
        <Tab.Screen name="Calendar">{() => <Calendar />}</Tab.Screen>
        <Tab.Screen name="Profile">{() => <Profile />}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}