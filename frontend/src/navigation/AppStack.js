import { View, Text } from 'react-native';
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Main from "../pages/Main";
import Sessions from "../pages/Sessions";
import Profile from "../pages/Profile";
import Calendar from "../pages/Calendar";

const Tab = createBottomTabNavigator();

export default function AppStack() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Feed'>
                    {() => <Main />}
                </Tab.Screen>
                <Tab.Screen name='Create Session'>
                    {() => <Sessions />}
                </Tab.Screen>
                <Tab.Screen name='Calendar'>
                    {() => <Calendar />}
                </Tab.Screen>
                <Tab.Screen name="Profile">
                    {() => <Profile />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer >
    )
};