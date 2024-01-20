import React, {useContext} from 'react';
import {View, Text, TextInput, StatusBar, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Login() {
    const navigation = useNavigation();
    return (
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
                            placeholderTextColor="gray"
                            className="text-black" // Adjust the text color to ensure visibility
                        />
                    </View>
                    <View className="bg-gray-200 p-5 rounded-2xl w-full mb-10">
                        <TextInput 
                            placeholder="Password" 
                            placeholderTextColor="gray"
                            className="text-black" // Adjust the text color to ensure visibility
                            secureTextEntry
                        />
                    </View>
                    <View className="w-full">
                        <TouchableOpacity  onPress={() => navigation.navigate('AppStack')}
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
    );
}

export default Login;
