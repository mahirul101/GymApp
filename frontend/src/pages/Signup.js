import { View, Text, TextInput, StatusBar, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Animated } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { onRegisterPress } from '../../../backend/Database';
import { useUser } from '../../../backend/User';

function SignUp() {
    const [fullName, setFullName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
    const { setUser } = useUser();

    const navigation = useNavigation();
    const fadeAnim = React.useRef(new Animated.Value(1)).current;
    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardWillShow',
          () => {
            setKeyboardVisible(true);
            // Fade out the text when the keyboard appears
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 200, // Adjust the duration as needed
              useNativeDriver: false,
            }).start();
          }
        );
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardWillHide',
          () => {
            setKeyboardVisible(false);
            // Fade in the text when the keyboard hides
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 200, // Adjust the duration as needed
              useNativeDriver: false,
            }).start();
          }
        );
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, [fadeAnim]);
    const SignUp = async () => {
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

        const data = await onRegisterPress(email, password, fullName, username);

        message = data.message;
        userDetails = data.userDetails;

        if (data.success) {
            setUser(userDetails);
            navigation.navigate('AppStack', { userDetails });
        } else {
            alert(message);
            return;
        }


    }
    return (
    <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
    >
        <View className="bg-white h-full w-full pb-6">
            <StatusBar style="light" />
            <View className="flex-1 justify-around pt-40 pb-10">
                <View className="items-center">
                <Animated.Text className="text-5xl font-bold"
                style={{
                  opacity: fadeAnim, // Apply opacity animation
                }}
              >
                Sign Up
              </Animated.Text>
                </View>

                <View className="mx-4 space-y-4">
                    <View className="bg-gray-200 p-5 rounded-2xl w-full">
                        <TextInput
                            placeholder="Full Name"
                            placeholderTextColor="gray"
                            onChangeText={setFullName}
                            className="text-black" // Adjust the text color to ensure visibility
                        />
                    </View>
                    <View className="bg-gray-200 p-5 rounded-2xl w-full">
                        <TextInput
                            placeholder="Username"
                            onChangeText={setUsername}
                            placeholderTextColor="gray"
                            className="text-black" // Adjust the text color to ensure visibility
                        />
                    </View>
                    <View className="bg-gray-200 p-5 rounded-2xl w-full">
                        <TextInput
                            placeholder="Email"
                            onChangeText={setEmail}
                            placeholderTextColor="gray"
                            className="text-black" // Adjust the text color to ensure visibility
                        />
                    </View>
                    <View className="bg-gray-200 p-5 rounded-2xl w-full mb-10">
                        <TextInput
                            placeholder="Password"
                            onChangeText={setPassword}
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
                    <View className="flex-row justify-center">
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="text-red-800">Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </KeyboardAvoidingView>
    );

}

export default SignUp;