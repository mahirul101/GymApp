import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';
import { useUser } from '../../../backend/User';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons'; // Ensure to install this package

const Settings = ({ navigation }) => {
  const { clearUser } = useUser();
  const scale = useSharedValue(1);

  const handleLogout = async () => {
    await clearUser();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'LoginStack' }],
      })
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <SafeAreaView className="bg-gray-100 flex-1">
      <View className="p-5 bg-white rounded-lg m-3 shadow">
        <Text className="text-4xl font-bold mb-10 text-gray-800">Settings</Text>

        <Animated.View style={[animatedStyle]}>
          <TouchableOpacity
            className="flex-row bg-red-500 p-4 rounded-lg items-center justify-center mb-4"
            onPress={handleLogout}
            onPressIn={() => { scale.value = withSpring(0.95); }}
            onPressOut={() => { scale.value = withSpring(1); }}
          >
            <Ionicons name="log-out-outline" size={24} color="white" />
            <Text className="text-white text-lg ml-2">Logout</Text>
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity
          className="bg-green-500 p-4 rounded-lg items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-white text-lg">Back to Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
