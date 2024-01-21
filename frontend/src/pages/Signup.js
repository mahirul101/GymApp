import {View, Text, TextInput, StatusBar, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

function SignUp() {
  const [fullName, setFullName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();

    const SignUp = () => {
        if (fullName === '') {
            alert('Please enter your full name');
            return;
        } else if (username === '') {
            alert('Please enter your username');
            return;
        } else if (email === '') {
            alert('Please enter your email');
            return;
        } else if (password === '') {
            alert('Please enter your password');
            return;
        }

        navigation.navigate('AppStack');
    }
    return (
        <View className="bg-white h-full w-full">
            <StatusBar style="light" />
            
            <View className="flex-1 justify-around pt-40 pb-10">
                <View className="items-center">
                    <Text className="text-5xl font-bold">Sign Up</Text>
                </View>

                <View className="mx-4 space-y-4">
                    <View className="bg-gray-200 p-5 rounded-2xl w-full">
                        <TextInput 
                            placeholder="Full Name" 
                            placeholderTextColor="gray"
                            value={fullName}
                            onTextInput={setFullName}
                            className="text-black" // Adjust the text color to ensure visibility
                        />
                    </View>
                    <View className="bg-gray-200 p-5 rounded-2xl w-full">
                        <TextInput 
                            placeholder="Username"
                            value={username}
                            onTextInput={setUsername}
                            placeholderTextColor="gray"
                            className="text-black" // Adjust the text color to ensure visibility
                        />
                    </View>
                    <View className="bg-gray-200 p-5 rounded-2xl w-full">
                        <TextInput 
                            placeholder="Email" 
                            value={email}
                            onTextInput={setEmail}
                            placeholderTextColor="gray"
                            className="text-black" // Adjust the text color to ensure visibility
                        />
                    </View>
                    <View className="bg-gray-200 p-5 rounded-2xl w-full mb-10">
                        <TextInput 
                            placeholder="Password" 
                            value={password}
                            onTextInput={setPassword}
                            placeholderTextColor="gray"
                            className="text-black" // Adjust the text color to ensure visibility
                            secureTextEntry
                        />
                    </View>
                    <View className="w-full">
                        <TouchableOpacity onPress={SignUp}
                            className="w-full bg-red-700 p-3 rounded-2xl mb-3">
                            <Text className="text-center text-white font-bold">Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="">
                        <Text className="text-center">By signing up, you agree to our Terms, Data Policy and Cookies Policy.</Text>
                    </View>
                    <View className="flex-row justify-center">
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="text-red-800">Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

}

export default SignUp;
