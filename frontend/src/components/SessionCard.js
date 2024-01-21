import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import { Avatar } from 'react-native-elements';

const SessionCard = ({ workoutName, date, time, location, user }) => {
    const [isSelected, setIsSelected] = useState(false);

    const selectSession = () => {
        setIsSelected(!isSelected);
    };

    return (
        <View style={isSelected ? styles.shrinkCard : styles.cardContainer}>
            <View>
                <View>
                    <Text style={styles.cardTitle}>{workoutName}</Text>
                </View>
                {!isSelected && (
                    <>
                        <View style={styles.footerText}>
                            <Fontisto name='date' size={20} />
                            <Text style={{ marginLeft: 10 }}>{date}</Text>
                        </View>
                        <View style={styles.footerText}>
                            <AntDesign name='clockcircleo' size={20} />
                            <Text style={{ marginLeft: 10 }}>{time}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 140 }}>
                            <View style={styles.footerText}>
                                <Entypo name='location' size={20} />
                                <Text style={{ marginLeft: 10 }}>{location}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingBottom:10   }}>
                                <AntDesign name='user' size={24} color='black' />
                                <Text style = {{ fontWeight: 'bold'}}>{user}</Text>
                            </View>
                        </View>
                    </>)}
            </View>
            <View style={{ position: 'absolute', right: -40, top: '15%' }}>
                <TouchableOpacity onPress={() => { selectSession() }}>
                    <View style={{ backgroundColor: isSelected ? 'green' : 'red', width: 40, height: 40, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginRight: 60 }}>
                        <AntDesign name={isSelected ? 'check' : 'plus'} size={30} color='white' />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        alignItems: 'center',
        marginTop: 25,
        border: 'solid',
    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: '#c2c5cc',
        height: 140,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5,
    },
    cardText: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10,
    },
    allSessions: {
        borderTopWidth: 1,
        marginHorizontal: 20,
        borderColor: '#c2c5cc',
    },
    footerText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
    },
    shrinkCard: {
        width: deviceWidth - offset,
        backgroundColor: '#c2c5cc',
        height: 80,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
});


export default SessionCard;