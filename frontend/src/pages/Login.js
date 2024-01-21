import React, {useContext} from 'react';
import {View, Text, TextInput, StatusBar, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {onLoginPress} from '../../../backend/Database';
import {useUser, saveUser} from '../../../backend/User';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setUser } = useUser();
    const navigation = useNavigation();
    
    const login = async () => {
        if (email === '') {
            alert('Please enter your email');
            return;
        } else if (password === '') {
            alert('Please enter your password');
            return;
        }

        const data = await onLoginPress(email, password);

        user = data.userDetails;

        if (data.success) {
            const user = data.userDetails;
            setUser(user);
            navigation.navigate('AppStack', {user});
        } else {
            message = data.message;
            alert(message);
        }
    }

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior="padding"
        >
        <View className="bg-white h-full w-full">
            <StatusBar style="light" />
            
            <View className="flex-1 justify-around pt-40 pb-10">
                <View className="items-center">
                    <Text className="text-5xl font-bold">Sign In</Text>
                </View>

                <View className="mx-4 space-y-4">
                    <View className="bg-gray-200 p-5 rounded-2xl w-full">
                        <TextInput 
                            placeholder="Email" 
                            value={email}
                            onChangeText={setEmail}
                            placeholderTextColor="gray"
                            className="text-black" // Adjust the text color to ensure visibility
                        />
                    </View>
                    <View className="bg-gray-200 p-5 rounded-2xl w-full mb-10">
                        <TextInput 
                            placeholder="Password" 
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor="gray"
                            className="text-black" // Adjust the text color to ensure visibility
                            secureTextEntry
                        />
                    </View>
                    <View className="w-full">
                        <TouchableOpacity  onPress={login}
                            className="w-full bg-red-700 p-3 rounded-2xl mb-3">
                            <Text className="text-center text-white font-bold">Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center">
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text className="text-red-800">Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
            </KeyboardAvoidingView>
    );
}

export default Login;
