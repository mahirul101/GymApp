import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
const Loading = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <ActivityIndicator size="large" color="#0000ff" />
            <Text className="mt-2 text-lg text-gray-800">Loading...</Text>
        </View>
    );
};

export default Loading;