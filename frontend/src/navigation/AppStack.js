import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Main from "../pages/Main";
import Sessions from "../pages/Sessions";
import Calendar from "../pages/Calendar";
import { useRoute } from '@react-navigation/native';
import Profile from "../pages/Profile";
import Chatbot from "../pages/Chatbot";
import SessionStack from './SessionStack';
import Settings from "../pages/Settings";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    
    <Tab.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Main">{() => <Main />}</Tab.Screen>
      <Tab.Screen name="Create Session">{() => <SessionStack />}</Tab.Screen>
      <Tab.Screen name="Calendar">{() => <Calendar />}</Tab.Screen>
      <Tab.Screen name="Profile">{() => <Profile />}</Tab.Screen>
      <Tab.Screen name="Chatbot">{() => <Chatbot />}</Tab.Screen>
    </Tab.Navigator>
  );
};