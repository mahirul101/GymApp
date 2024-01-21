import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sessions from "../pages/Sessions";
import SessionInfo from "../pages/SessionInfo";

const Stack = createNativeStackNavigator();

export default function SessionStack() {
    return (
        <Stack.Navigator initialRouteName='Sessions' screenOptions={{ headerShown: false }}>
             <Stack.Screen name="Sessions" component={Sessions} />
            <Stack.Screen name="SessionInfo" component={SessionInfo} />
        </Stack.Navigator>
    );
};
