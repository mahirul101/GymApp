import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Post from "../pages/Post";

const ProfileProp = ({
  fullName,
  username,
  userImage,
  aboutBio,
  posts,
  followers,
  following,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Image source={{ uri: userImage }} style={styles.image} />
          <View>
            <Text style={styles.fullName}>{fullName}</Text>
            <Text style={styles.username}>@{username}</Text>
          </View>
        </View>
        <View style={styles.followContainer}>
          <Text style={styles.followText}>
            <Text style={{ fontWeight: "bold" }}>{posts} </Text>
            Posts
          </Text>
          <Text style={styles.followText}>
            <Text style={{ fontWeight: "bold" }}>{followers} </Text>
            Followers
          </Text>
          <Text style={styles.followText}>
            <Text style={{ fontWeight: "bold" }}>{following} </Text>
            Following
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionContent}>{aboutBio}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Posts</Text>
        <Post />
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
    borderBottomWidth: 3,
    borderBottomColor: "#dadada",
  },
  userContainer: {
    flexDirection: "row", // Align children horizontally
    alignItems: "center", // Align children vertically in the center
    backgroundColor: "#fff", // White background
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 20,
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
    backgroundColor: "white",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
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
    marginTop: 5,
    marginBottom: 5,
  },
  goalItem: {
    fontSize: 16,
    color: "#4a4a4a",
    marginTop: 2,
  },
  postContainer: {
    marginBottom: 20,
  },
  postImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  postCaption: {
    fontSize: 16,
  },
  // Add more styles for additional elements
});

export default ProfileProp;
