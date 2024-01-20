import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from "../pages/Main";
import Sessions from "../pages/Sessions";
import Profile from "../pages/Profile";
import Calendar from "../pages/Calendar";

const Tab = createBottomTabNavigator();

export default function AppStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Main' component={Main} />
            <Tab.Screen name='Create Session' component={Sessions} />
            <Tab.Screen name='Calendar' component={Calendar} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};
