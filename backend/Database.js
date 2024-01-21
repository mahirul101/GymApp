import AsyncStorage from '@react-native-async-storage/async-storage';
import { debug } from 'openai/core';

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

        const profilePicture = "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg";

        // Save the new user
        const newUser = {
            email,
            password,
            username,
            fullName,
            profilePicture,
            aboutBio: '',
            followers: [],
            following: [],
            myPosts: [],
            mySessions: [{
                "WorkoutType": "Running",
                "Location": "Bukit Timah",
                "date": "2021-10-29",
                "time": "12:00:00"
            }],
            joinedSessions: []
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

export const addMySession = async (email, username, workoutType, location, date, time) => {
    try {
        email = email.toLowerCase();
        const userData = await AsyncStorage.getItem(email);
        if (userData === null) {
            return { success: false, message: 'Email or password is incorrect' };
        }

        const session = {
            username: username,
            workoutType,
            location,
            date,
            time
        };

        const user = JSON.parse(userData);
        user.mySessions.push(session);

        await AsyncStorage.setItem(email, JSON.stringify(user));

        return { success: true, message: 'Session added successfully', userDetails: user };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export const addJoinSession = async (email, username, workoutType, location, date, time) => {
    try {
        email = email.toLowerCase();
        const userData = await AsyncStorage.getItem(email);
        if (userData === null) {
            return { success: false, message: 'Email or password is incorrect' };
        }

        const session = {
            username: username,
            workoutType,
            location,
            date,
            time
        };

        const user = JSON.parse(userData);
        user.joinedSessions.push(session);

        await AsyncStorage.setItem(email, JSON.stringify(user));

        return { success: true, message: 'Session added successfully', userDetails: user };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export const removeJoinSession = async (email, username, workoutType, location, date, time) => {
    try {
        const userData = await AsyncStorage.getItem(email);
        if (userData === null) {
            return { success: false, message: 'User not found' };
        }

        const user = JSON.parse(userData);

        // Find the index of the session based on multiple attributes
        const sessionIndex = user.joinedSessions.findIndex(session =>
            session.username === username &&
            session.workoutType === workoutType &&
            session.location === location &&
            session.date === date &&
            session.time === time
        );

        if (sessionIndex !== -1) {
            user.joinedSessions.splice(sessionIndex, 1); // Remove the session

            await AsyncStorage.setItem(email, JSON.stringify(user));
            return { success: true, message: 'Session removed successfully' };
        } else {
            return { success: false, message: 'Session not found' };
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export const removeSession = async (email, username, workoutType, location, date, time) => {
    try {
        const userData = await AsyncStorage.getItem(email);
        if (userData === null) {
            return { success: false, message: 'User not found' };
        }

        const user = JSON.parse(userData);

        // Find the index of the session based on multiple attributes
        const sessionIndex = user.mySessions.findIndex(session =>
            session.username === username &&
            session.workoutType === workoutType &&
            session.location === location &&
            session.date === date &&
            session.time === time
        );

        if (sessionIndex !== -1) {
            user.mySessions.splice(sessionIndex, 1); // Remove the session

            await AsyncStorage.setItem(email, JSON.stringify(user));
            return { success: true, message: 'Session removed successfully' };
        } else {
            return { success: false, message: 'Session not found' };
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const updateAbout = async (email, newAbout) => {
    try {
        const userData = await AsyncStorage.getItem(email);
        if (userData === null) {
            return { success: false, message: 'User not found' };
        }

        const user = JSON.parse(userData);
        user.aboutBio = newAbout; // Update the about section

        await AsyncStorage.setItem(email, JSON.stringify(user));
        return { success: true, message: 'About updated successfully' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
