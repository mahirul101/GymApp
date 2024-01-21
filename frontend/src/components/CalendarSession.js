import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function CalendarSession({ workoutName, date, time }) {
  return (
    <SafeAreaView>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{workoutName}</Text>
        <View style={styles.footerText}>
          <Fontisto name="date" size={20} />
          <Text style={{ marginLeft: 10 }}>{date}</Text>
        </View>
        <View style={styles.footerText}>
          <AntDesign name="clockcircleo" size={20} />
          <Text style={{ marginLeft: 10 }}>{time}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    marginTop: -50,
    borderRadius: 10,
    backgroundColor: "#c2c5cc",
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },
  cardInfo: {
    fontSize: 15,
    marginTop: 5,
  },
  footerText: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
    flexDirection: "row",
  },
});
