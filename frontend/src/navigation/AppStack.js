import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Main from "../pages/Main";
import Sessions from "../pages/Sessions";
import Calendar from "../pages/Calendar";
import Profile from "../pages/Profile";
import SessionStack from './SessionStack';

const Tab = createBottomTabNavigator();

export default function AppStack() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Main' component={Main} />
            <Tab.Screen name='Create Session' component={SessionStack} />
            <Tab.Screen name='Calendar' component={Calendar} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};
