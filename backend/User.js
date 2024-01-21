import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    // Function to load the user from AsyncStorage
    const loadUser = async () => {
        try {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error('Failed to load user from AsyncStorage:', error);
        }
    };

    // Function to save the user to AsyncStorage
    const saveUser = async (userData) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
        } catch (error) {
            console.error('Failed to save user to AsyncStorage:', error);
        }
    };

    useEffect(() => {
        loadUser().finally(() => setLoading(false));
    }, []);

    const clearUser = async () => {
        try {
            await AsyncStorage.removeItem('user');
            setUser(null);
        } catch (error) {
            console.error('Failed to clear user from AsyncStorage:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser: saveUser, clearUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
