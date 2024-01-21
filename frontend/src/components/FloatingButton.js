import React from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default class FloatingButton extends React.Component {
    render() {
        const { onPress } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <Animated.View style={[styles.button, styles.menu]}>
                        <AntDesign name="plus" size={25} color="#fff" />
                    </Animated.View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 330,
        bottom: 10,
    },

    menu: {
        backgroundColor: '#f02A4b',
    },

    button: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        justifyContent: 'center',
        alignItems: 'center',
    },
});