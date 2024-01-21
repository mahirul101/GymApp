import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from "react-native"
import React from 'react'
import moment from 'moment'
import Swiper from 'react-native-swiper'
import { useUser } from "../../../backend/User";
import CalendarSession from "../components/CalendarSession";
import { useNavigation } from "@react-navigation/native";
import SessionInfo from "./SessionInfo";


export default function Calendar() {
    const navigation = useNavigation();
    const swiper = React.useRef();
    const [value, setValue] = React.useState(new Date());
    const [week, setWeek] = React.useState(0);
    const { user } = useUser();

    const formatDate = (date) => moment(date).format("MMMM Do, YYYY");
    const formatTime = (time) => moment(time, "HH:mm:ss").format("h:mm A");


    const renderSessionsForSelectedDate = () => {
        console.log(user);
        if (user === null || user.mySessions.length === 0 && user.joinedSessions.length === 0)
            return <Text>No sessions for this date</Text>;
        const selectedDateString = moment(value).format("YYYY-MM-DD");

        // Filter and display mySessions for the selected date
        const mySessionsForDate = user.mySessions.filter(session =>
            moment(session.date).format("YYYY-MM-DD") === selectedDateString
        );

        // Filter and display joinedSessions for the selected date
        const joinedSessionsForDate = user.joinedSessions.filter(session =>
            moment(session.date).format("YYYY-MM-DD") === selectedDateString
        );

        // Combine both arrays
        const allSessionsForDate = [...mySessionsForDate, ...joinedSessionsForDate];

        if (allSessionsForDate.length === 0) {
            return <Text>No sessions for this date</Text>;
        }

        return allSessionsForDate.map((session, index) => (
            <CalendarSession
                key={index}
                workoutName={session.workoutType}
                date={formatDate(session.date)}
                time={formatTime(session.time)}
            />
        ));
    };


    const weeks = React.useMemo(() => {
        const start = moment().add(week, 'weeks').startOf('week');

        return [-1, 0, 1].map(adj => {
            return Array.from({ length: 7 }).map((_, index) => {
                const date = moment(start).add(adj, 'week').add(index, 'day');

                return {
                    weekday: date.format('ddd'),
                    date: date.toDate(),
                };
            });
        });
    }, [week]);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ ...styles.header, borderBottomWidth: '1', borderColor: '#c2c5cc' }}>
                    <Text style={styles.title}>Timetable</Text>
                </View>

                <View style={styles.picker}>
                    <Swiper
                        index={1}
                        ref={swiper}
                        loop={false}
                        showsPagination={false}

                        onIndexChanged={ind => {
                            if (ind === 1) {
                                return;
                            }
                            setTimeout(() => {
                                const newIndex = ind - 1;
                                const newWeek = week + newIndex;
                                setWeek(newWeek);
                                setValue(moment(value).add(newIndex, 'week').toDate());
                                swiper.current.scrollTo(1, false);
                            }, 100);
                        }}>

                        {weeks.map((dates, index) => (
                            <View
                                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                                key={index}>
                                {dates.map((item, dateIndex) => {
                                    const isActive =
                                        value.toDateString() === item.date.toDateString();
                                    return (
                                        <TouchableWithoutFeedback
                                            key={dateIndex}
                                            onPress={() => setValue(item.date)}>
                                            <View
                                                style={[
                                                    styles.item,
                                                    isActive && {
                                                        borderColor: "#111"
                                                    },
                                                ]}>
                                                <Text
                                                    style={[
                                                        styles.itemWeekday,
                                                        isActive && {
                                                            color: "#111",
                                                        },
                                                    ]}>
                                                    {item.weekday}
                                                </Text>

                                                <Text
                                                    style={[
                                                        styles.itemDate,
                                                        isActive && {
                                                            color: "#111",
                                                        },
                                                    ]}
                                                >
                                                    {item.date.getDate()}
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    );
                                })}

                            </View>
                        ))}
                    </Swiper>
                </View>

                <View style={{ flex: 8, paddingVertical: 5, paddingHorizontal: 10 }}>
                    <Text style={styles.contentText}>{value.toDateString()}</Text>


                    <View style={styles.placeholder}>
                        <ScrollView>
                            <View style={styles.placeholderContent}>
                                {renderSessionsForSelectedDate()}
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.btn} onPress={() => {
                            navigation.navigate('SessionInfo'); // Navigate to SessionInfo page
                        }}>
                            <Text style={styles.btnText}>Create Session</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
    },

    picker: {
        flex: 1,
        maxHeight: '74',
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    header: {
        paddingHorizontal: 16,
    },

    contentText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#333',
        marginBottom: 12,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },

    itemRow: {
        width: '1',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginHorizontal: 10,

    },

    item: {
        flex: 1,
        height: 50,
        marginHorizontal: 4,
        paddingVertical: 10,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'column',
    },

    itemWeekday: {
        fontSize: 13,
        fontWeight: 'bold',
    },

    itemDate: {
        fontSize: 13,
        fontWeight: 'bold',
    },

    placeholder: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        height: 400,
        marginTop: 0,
        padding: 0,
        backgroundColor: 'transparent',
    },

    placeholderContent: {
        borderWidth: 4,
        borderColor: '#e5e7eb',
        borderStyle: 'dashed',
        borderRadius: 9,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },

    footer: {
        marginTop: 24,
        paddingHorizontal: 16,
    },

    /** Button */
    btn: {
        flexDirection: 'row',
        backgroundColor: '#B91C1C',
        borderWidth: 1,
        borderColor: '#B91C1C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
});