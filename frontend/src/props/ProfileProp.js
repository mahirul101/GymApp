import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileProp = ({
  fullName,
  username,
  userImage,
  aboutBio,
  followers,
  following,
  goals,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={{ uri: userImage }} style={styles.image} />
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.username}>{username}</Text>
        <View style={styles.followContainer}>
          <Text style={styles.followText}>Followers: {followers}</Text>
          <Text style={styles.followText}>Following: {following}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionContent}>{aboutBio}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Goals:</Text>
        {goals.map((goal, index) => (
          <Text key={index} style={styles.goalItem}>
            - {goal}
          </Text>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  fullName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  section: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: "#333",
  },
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  followText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  goalItem: {
    fontSize: 16,
    color: "#4a4a4a",
    marginTop: 2,
  },
  // Add more styles for additional elements
});

export default ProfileProp;
