import React from "react";
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default class FloatingButton extends React.Component {
    render() {
        const { onPress } = this.props;
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={onPress}>
                    <Animated.View style={[styles.button, styles.menu]}>
                        <AntDesign name="plus" size={25} color="#fff" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 60,
        right: 10,
    },

    menu: {
        backgroundColor: '#f02A4b',
    },

    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
