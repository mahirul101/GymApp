import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from "react-native"
import React from 'react'
import moment from 'moment'
import Swiper from 'react-native-swiper'


export default function Dev() {
    const swiper = React.useRef();
    const [value, setValue] = React.useState(new Date());
    const [week, setWeek]  = React.useState(0);

    const weeks = React.useMemo(() => {
        const start = moment(start).add(weeks, 'weeks').startOf('week');


        return [-1, 0, 1].map(adj => {
            return Array.from({ length: 7 }).map((_, index) => {
                const date = moment(start).add(adj, 'week').add(index, 'day')

                return {
                    weekday: date.format('ddd'),
                    date : date.toDate(),
                };
            });
        });
    }, [week]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.title}>Timetable</Text>
                </View>

                <View style={styles.picker}>
                    <Swiper
                        index = {1} ref = {swiper} showsPagination = {false} loop = {false}
                        onIndexChanged={(index) => {
                            if (index === 1) {
                                return
                            }

                            setTimeout(() => {
                                const newIndex = index - 1
                                const newWeek = week + newIndex
                                setWeek(newWeek);
                                setValue(moment(value).add(newIndex, 'week').toDate());
                                swiper.current.scrollTo(1, false);
                            },100);
                        }}>
                            
                        {weeks.map((dates, index) => (
                            <View 
                                style={[styles.itemRow, { paddingHorizontal: 16}]}
                                key = {index}>
                                {dates.map((item, dateIndex) => {
                                    const isActive =
                                        value.toDateString() === item.date.toDateString(); 
                                    return  (
                                    <TouchableWithoutFeedback 
                                        key={dateIndex} 
                                        onPress={() => setValue(item.date)}>
                                        <View
                                            style ={[
                                                styles.item,
                                                isActive && {
                                                    borderColor: "#111"
                                                },
                                            ]}>
                                            <Text 
                                                style = {[
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

                <View style = {{flex:8 , paddingVertical: 5, paddingHorizontal : 10}}>
                    <Text style = {styles.contentText}>{value.toDateString()}</Text>


                    <View style = {styles.placeholder}>
                        <View style = {styles.placeholderContent}>
                        {/*ADD STUFF HERE*/}
                        </View>
                    </View>

                    <View style = {styles.footer}>
                        <TouchableOpacity style = {styles.btn} onPress={() => {
                           //handle create session 
                        }}>
                            <Text style = {styles.btnText}>Create Session</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
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
        paddingHorizontal : 16,
    },

    contentText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#333',
        marginBottom: 12,
    },

    title: {
        fontSize: 32,
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

    item :{
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

      footer:{
        marginTop: 24,  
        paddingHorizontal: 16,
      },
      
      /** Button */
      btn: {
        flexDirection: 'row',
        backgroundColor: '#007aff',
        borderWidth: 1,
        borderColor: '#007aff',
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