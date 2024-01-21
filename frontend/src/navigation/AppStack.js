import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Main from "../pages/Main";
import Sessions from "../pages/Sessions";
import Calendar from "../pages/Calendar";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import Chatbot from "../pages/Chatbot";
import SessionStack from "./SessionStack";
import Settings from "../pages/Settings";

import { useRoute } from '@react-navigation/native';

const MainPage = "Main";
const SessionsPage = "Sessions";
const CalendarPage = "Calendar";
const ProfilePage = "Profile";
const ChatbotPage = "Chatbot";
const SearchPage = "Search";
const SettingsPage = "Settings";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator
      initialRouteName={CalendarPage}
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: "#FF0000",
        inactiveTintColor: "gray",
        labelStyle: { fontSize: 10, paddingBottom: 0 },
        style: { height: 60, paddingTop: 10 },
      }}
    >
      <Tab.Screen
        name={CalendarPage}
        component={SessionStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SessionsPage}
        component={Sessions}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ProfilePage}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SearchPage}
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ChatbotPage}
        component={Chatbot}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "chatbox" : "chatbox-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
