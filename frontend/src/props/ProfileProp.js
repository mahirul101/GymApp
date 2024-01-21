import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Post from "../pages/Post";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ProfileProp = ({
  fullName,
  username,
  userImage,
  aboutBio,
  posts,
  followers,
  following,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <MaterialIcons name="settings" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    height: 40,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    paddingTop:10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 3,
    borderBottomColor: "#dadada",
    paddingTop: 10,
    paddingBottom: 20,
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
    marginBottom: 15,
    marginRight: 20,
    borderWidth: 2, 
    borderColor: 'black'
  },
  fullName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: "gray",
    marginBottom: 15,
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
    marginLeft: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: "#333",
    marginLeft: 5,
  },
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  followText: {
    fontSize: 16,
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
