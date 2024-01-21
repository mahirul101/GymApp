import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calendar from "../pages/Calendar";
import SessionInfo from "../pages/SessionInfo";

const Stack = createNativeStackNavigator();

export default function SessionStack() {
    return (
        <Stack.Navigator initialRouteName='Calendar' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen name="SessionInfo" component={SessionInfo} />
        </Stack.Navigator>
    );
};
