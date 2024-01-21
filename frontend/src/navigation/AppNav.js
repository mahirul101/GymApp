import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';
import AppStack from './AppStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUser } from '../../../backend/User';
import Loading from '../components/Loading';
import Settings from '../pages/Settings';
const Stack = createNativeStackNavigator();

export default function AppNav() {
    const { user } = useUser();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an async task, e.g., data fetching
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 2 seconds delay

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (user) {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="AppStack" component={AppStack} />
                    <Stack.Screen name="LoginStack" component={LoginStack} />
                    <Stack.Screen name="Settings" component={Settings} />
                    {/* Optionally include LoginStack here if needed */}
                </Stack.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="LoginStack" component={LoginStack} />
                    <Stack.Screen name="AppStack" component={AppStack} />
                    <Stack.Screen name="Settings" component={Settings} />
                    {/* Optionally include AppStack here if needed */}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};
