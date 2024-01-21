import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FloatingButton from "../components/FloatingButton";
import { useNavigation } from '@react-navigation/native';
import SessionInfo from "./SessionInfo.js";

export default function Sessions( ) {

    const navigation = useNavigation();

    const handleFloatingButtonPress = () => {
        // Navigate to the desired screen or modal
        navigation.navigate('SessionInfo');
    };

    return (
        <View>
            {/* Your existing components */}
            <Text>Dev</Text>
    
  
            <FloatingButton onPress={handleFloatingButtonPress} />
        </View>
    );

    // let popupRef = React.createRef();

    // const onShowPopup = () => {
    //     popupRef.show();
    // };

    // const onClosePopup = () => {
    //     popupRef.close();
    // };

    // const handleFloatingButtonPress = () => {
    //     popupRef.show();
    //     // Navigate to a different screen or page
    //     // navigation.navigate('SessionInfo', {presentation: 'modal' });; 
    // };

    // return (
    //     <View>
    //         <FloatingButton onPress={() => navigation.navigate ("SessionInfo")} />
    //         <SessionInfo
    //             title = "Session Info"
    //             ref={(target) => popupRef = target}
    //             onTouchOutside= {onClosePopup}
    //         />
    //         <Text>Dev</Text>
    //     </View>
    // );
}
