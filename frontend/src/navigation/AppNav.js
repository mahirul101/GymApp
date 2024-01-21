import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';
import AppStack from './AppStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppNav() {
    let initialRouteName = 'LoginStack';
    if (true) {
        initialRouteName = 'AppStack';
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginStack" component={LoginStack} />
                <Stack.Screen name="AppStack" component={AppStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
