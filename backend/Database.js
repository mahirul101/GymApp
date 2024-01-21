import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAll = async () => {
    try {
        await AsyncStorage.clear();
        console.log('Storage cleared');
    } catch (error) {
        console.log(error);
    }
}

export const onRegisterPress = async (email, password, fullName, username) => {
    try {
        email = email.toLowerCase();
        // Check if user already exists
        const existingUser = await AsyncStorage.getItem(email);
        if (existingUser !== null) {
            return { success: false, message: 'Email already exists' };
        }

        // Save the new user
        const newUser = {
            email,
            password, // Remember to hash the password in a real app
            username,
            fullName
        };
        await AsyncStorage.setItem(email, JSON.stringify(newUser));
        return { success: true, message: 'User registered successfully', userDetails: newUser };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const onLoginPress = async (email, password) => {
    try {
        email = email.toLowerCase();
        const userData = await AsyncStorage.getItem(email);
        if (userData === null) {
            return { success: false, message: 'Email or password is incorrect' };
        }

        const user = JSON.parse(userData);
        if (user.password === password) { // Ensure password hashing in real apps
            return { success: true, message: 'Login successful', userDetails: user };
        } else {
            return { success: false, message: 'Invalid credentials' };
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const addDataToUser = async (email, newData) => {
    try {
        const userData = await AsyncStorage.getItem(email);
        if (userData === null) {
            return { success: false, message: 'User not found' };
        }

        // Parse existing user data
        const user = JSON.parse(userData);

        // Merge new data with existing user data
        const updatedUser = {
            ...user,
            ...newData
        };

        // Save the updated user data
        await AsyncStorage.setItem(email, JSON.stringify(updatedUser));

        return { success: true, message: 'User data updated successfully', userDetails: updatedUser };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const addSessionToUser = async (email, newData) => {
    try {
        const userData = await AsyncStorage.getItem(email);
        if (userData === null) {
            return { success: false, message: 'User not found' };
        }

        // Parse existing user data
        const user = JSON.parse(userData);

        // Merge new data with existing user data
        const updatedUser = {
            ...user,
            ...newData
        };

        // Save the updated user data
        await AsyncStorage.setItem(email, JSON.stringify(updatedUser));

        return { success: true, message: 'User data updated successfully', userDetails: updatedUser };
    } catch (error) {
        return { success: false, message: error.message };
    }
};