import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-elements';

const FeedCard = ({ username, date, workoutName, duration, calories, photoUrl }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <View style={styles.profileIcon}>
                        <Avatar size="small" rounded
                            source={{
                                uri:
                                    'https://reactnative.dev/img/tiny_logo.png',
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.cardUsername}>{username}</Text>
                        <Text style={styles.cardDate}>{date}</Text>
                    </View>
                </View>
                <Image style={styles.imageStyle} source={{ uri: 'https://picsum.photos/200' }} />
                <View style={styles.cardFooter}>
                    <Text style={styles.titleStyle}>{workoutName}</Text>
                    <View style={{ ...styles.iconLabelStyle, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                            <Entypo name='clock' size="20" />
                            <Text>{duration}</Text>
                            <FontAwesome5 name='running' size="20" />
                            <Text>{calories}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 5, }}>
                            <AntDesign name='like2' size="20" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: '#c2c5cc',
        height: 340,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 200,
        width: deviceWidth - offset,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    categoryStyle: {
        fontWeight: '200',
    },
    cardFooter: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    cardHeader: {
        padding: 10,
        flexDirection: 'row',
    },
    iconLabelStyle: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    cardUsername: {
        marginLeft: 10,
        fontWeight: '300',
        fontSize: 15,
    },
    cardDate: {
        marginLeft: 10,
        fontWeight: '300',
        fontSize: 10,
    },
});


export default FeedCard;