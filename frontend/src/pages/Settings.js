import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LoginStack")}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>

        <Button title="Back to Profile" onPress={() => navigation.goBack()} />

        {/* Additional settings items can be added here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f44336", // Red color for the logout button
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  // Additional styles can be added here
});

export default Settings;