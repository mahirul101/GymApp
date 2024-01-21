import React, { useState, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Animated,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import { Avatar } from "react-native-elements";
import { useUser } from "../../../backend/User";
import { addJoinSession, removeJoinSession } from "../../../backend/Database";

const SessionCard = ({ workoutType, date, time, location, creator }) => {
    const { user, setUser } = useUser();
    const [isSelected, setIsSelected] = useState(false);

    if (!user) {
        return <Text>User data is not available</Text>;
    }
    const cardHeight = useRef(new Animated.Value(140)).current;

    const selectSession = async () => {
        if (!isSelected) {
            try {
                const data = await addJoinSession(
                    user.email,
                    creator,
                    workoutType,
                    location,
                    date,
                    time
                );

                if (data.success) {
                    setUser(data.userDetails);
                    alert(data.message);
                    // console.log(user)
                } else {
                    alert(data.message);
                }
            } catch (error) {
                alert("Error adding joined session: " + error.message);
            }
        } else {
            try {
                const data = await removeJoinSession(
                    user.email,
                    creator,
                    workoutType,
                    location,
                    date,
                    time
                );
                if (data.success) {
                    alert(data.message);
                    console.log("success");
                } else {
                    alert(data.message);
                }
            } catch (error) {
                alert("Error removing joined session: " + error.message);
            } finally {
                Animated.timing(cardHeight, {
                    toValue: isSelected ? 140 : 80, // Toggle between the two heights
                    duration: 300, // Animation duration
                    useNativeDriver: false, // Height is not supported by native driver
                }).start();
            }
        }
    };

    return (
        <Animated.View style={[styles.cardContainer, { height: cardHeight }]}>
            <View style={styles.cardContent}>
                <View style={styles.header}>
                    <Text style={styles.cardTitle}>{workoutType}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setIsSelected(!isSelected); // Toggle the selection
                            selectSession(creator, workoutType, date, time, location); // Run the function
                        }}
                        style={[styles.actionButton, isSelected ? styles.selected : null]}
                    >
                        <AntDesign
                            name={isSelected ? "check" : "plus"}
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardDetails}>
                    <Fontisto name="date" size={16} color="#555" />
                    <Text style={styles.cardText}>{date}</Text>
                </View>
                <View style={styles.cardDetails}>
                    <AntDesign name="clockcircleo" size={16} color="#555" />
                    <Text style={styles.cardText}>{time}</Text>
                </View>
                <View style={styles.cardDetails}>
                    <Entypo name="location-pin" size={16} color="#555" />
                    <Text style={styles.cardText}>{location}</Text>
                </View>
            </View>
            <View style={styles.creatorInfo}>
                <Avatar rounded source={{ uri: user.userImage }} size="medium" />
                <Text style={styles.usernameText}>{creator}</Text>
            </View>
        </Animated.View>
    );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 5,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    footerText: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginTop: 10,
        flexDirection: "row",
    },
    shrinkCard: {
        width: deviceWidth - offset,
        backgroundColor: "#c2c5cc",
        height: 80,
        borderRadius: radius,

        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: "#FFF",
        borderRadius: radius,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: radius,
        elevation: 5,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        justifyContent: "space-between",
    },
    cardContent: {
        flex: 1,
    },
    cardDetails: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 3,
        marginBottom: 3,
    },
    cardText: {
        fontSize: 16,
        marginLeft: 10,
        color: "#555",
    },
    creatorInfo: {
        marginBottom: 10,
        position: "absolute",
        right: 10,
        bottom: 10,
        alignItems: "center",
    },
    usernameText: {
        fontWeight: "bold",
        marginTop: 5,
        right: 20,
    },
    actionButton: {
        backgroundColor: "#E91E63",
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#E91E63",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: radius,
        elevation: 4,
        position: "absolute",
        right: 15,
        top: 15,
    },
    selected: {
        backgroundColor: "green",
    },
});

export default SessionCard;
