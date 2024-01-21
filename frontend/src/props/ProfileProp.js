import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import Post from "../pages/Post";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {launchImageLibrary} from 'react-native-image-picker';
import { updateAbout } from "../../../backend/Database";

const ProfileProp = ({
  email,
  fullName,
  username,
  userImage,
  aboutBio,
  posts,
  followers,
  following,
}) => {
  const [editAbout, setEditAbout] = useState(false);
  const [aboutText, setAboutText] = useState(aboutBio);
  const navigation = useNavigation();

  const handleSaveAbout = async () => {
    const {success, message} = await updateAbout(email, aboutText);
    if (!success) {
      alert(message);
    } else {
      setEditAbout(false);
    }
    
  };
  return (
    <>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <MaterialIcons name="settings" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Image source={{ uri: userImage }} style={styles.image} />
          <TouchableOpacity 
            style={styles.editIcon} // Replace with actual email
          >
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
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
        <View className="pt-5 px-2.5 pb-10 border-b border-gray-200 bg-white">
        <View className="flex-row justify-between items-start mb-3">
          <Text className="font-bold text-lg">About</Text>
          {editAbout ? (
            <TouchableOpacity onPress={handleSaveAbout}>
              <MaterialIcons name="save" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setEditAbout(true)}>
              <MaterialIcons name="edit" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
        {editAbout ? (
          <TextInput
            className="text-base text-gray-800 border-gray-300 border p-2"
            onChangeText={setAboutText}
            value={aboutText}
            multiline
          />
        ) : (
          <Text className="text-base text-gray-800">{aboutText}</Text>
        )}
      </View>


    </>
  );
};

const styles = StyleSheet.create({
  editIcon: {
    position: 'absolute',
    left: 0, // Adjust as needed
    top: 0, // Adjust as needed
    backgroundColor: 'red', // Choose your color
    borderRadius: 20,
    padding: 5,
  },
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
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  followText: {
    fontSize: 16,
  }
});

export default ProfileProp;
