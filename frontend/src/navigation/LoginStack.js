import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../pages/Login";
import SignUp from "../pages/Signup"; // Assuming you have these pages

const Stack = createNativeStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
        </Stack.Navigator>
    );
};
