import { View, Text, ScrollView, StyleSheet } from "react-native"
import FeedCard from "../components/FeedCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dev() {

    return (
        <SafeAreaView>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: '1', borderColor: '#c2c5cc', flex:'0', paddingVertical: 10 }}>
                {/* <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10, marginTop: 20 }}>Feed</Text> */}
                <Text style = {styles.title}>Feed</Text>
            </View>
            <ScrollView>
                <FeedCard
                    username="Name"
                    date="14 January 2024"
                    workoutName="Leg Day"
                    duration="1hr20"
                    calories="175 cals"
                    photoUrl="https://picsum.photos/200/300" />
                <FeedCard
                    username="Name"
                    date="14 January 2024"
                    workoutName="Leg Day"
                    duration="1hr20"
                    calories="175 cals"
                    photoUrl="https://picsum.photos/200/300" />
                <FeedCard
                    username="Name"
                    date="14 January 2024"
                    workoutName="Leg Day"
                    duration="1hr20"
                    calories="175 cals"
                    photoUrl="https://picsum.photos/200/300" />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#333',
            marginLeft: 20, marginBottom: 10, marginTop: 20
    },
})