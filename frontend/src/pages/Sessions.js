import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import SessionCard from "../components/SessionCard";
import AntDesign from "react-native-vector-icons/AntDesign";
import FloatingButton from "../components/FloatingButton";
import { useNavigation } from "@react-navigation/native";
import SessionInfo from "./SessionInfo.js";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Sessions() {
  const navigation = useNavigation();

  // const handleFloatingButtonPress = () => {
  //     alert('Floating Button Pressed')
  //     // Navigate to the desired screen or modal
  //     navigation.navigate('SessionInfo');
  // };
  // const handleFloatingButtonPress = () => {
  //     alert('Floating Button Pressed')
  //     // Navigate to the desired screen or modal
  //     navigation.navigate('SessionInfo');
  // };

  const sessions = [
    {
      workoutType: "Leg Day",
      date: "14 January 2024",
      time: "5:15PM",
      location: "Buzzfit DDO",
      creator: "sayem",
    },
    {
      workoutType: "Leg Day",
      date: "14 January 2024",
      time: "5:15PM",
      location: "Buzzfit DDO",
      creator: "sayem",
    },
  ];

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <Text style={{ fontSize: 20, marginLeft: 10, marginBottom: 20 }}>
              Upcoming Sessions
            </Text> */}
                <Text style = {styles.title}>Upcoming Sessions</Text>
            <FloatingButton
              onPress={() => navigation.navigate("SessionInfo")}
            />
            {/* <AntDesign name='filter' size={20} right={20}></AntDesign> */}
          </View>
          <ScrollView>
            <View style={styles.allSessions}>
              {sessions.map((session, index) => (
                <SessionCard
                  key={index}
                  workoutType={session.workoutType}
                  date={session.date}
                  time={session.time}
                  location={session.location}
                  creator={session.creator}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
        paddingVertical: 5,
  },

    title:{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#333',
            marginLeft: 20, marginBottom: 10, marginTop: 20
    },
  cardTitle: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  cardText: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
  },
  allSessions: {
    borderTopWidth: 1,
    marginHorizontal: 20,
    borderColor: "#c2c5cc",
    height: deviceHeight,
  },
});
