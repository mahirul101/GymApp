import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const UserItem = ({ userImage, fullName, username }) => {
  return (
    <View style={styles.card}>
      <Image
        src={userImage} // Replace with your local image
        style={styles.avatar}
      />
      <View style={styles.userInfo}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <TouchableOpacity style={styles.followBtn}>
        <Text style={styles.followBtnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fdfdfd",
    borderRadius: 10,
    padding: 10,
    marginVertical: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  fullName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  username: {
    fontSize: 14,
    color: "gray",
  },
  followBtn: {
    backgroundColor: "red",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  followBtnText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default UserItem;
