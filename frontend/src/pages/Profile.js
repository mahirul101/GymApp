import React from "react";
import { View, Text } from "react-native";
import ProfileProp from "../props/ProfileProp";
import Post from "./Post";

const UserProfileScreen = () => {
  // Replace these with actual user data
  const fullName = "Mahirul Islam";
  const username = "TheMahirul";
  const userImage =
    "https://media.licdn.com/dms/image/D5635AQGOXOYrGN5MTw/profile-framedphoto-shrink_400_400/0/1653892732166?e=1706389200&v=beta&t=L9AIVErTwQDApoklSlzQhpOP_KPqVX59AyYMCRLqvQg"; // URL to the user's profile image

  const aboutBio = "Fitness enthusiast and aspiring bodybuilder";
  const posts = 10;
  const followers = 69;
  const following = 132;
  const goals = [
    "Build muscle mass",
    "Improve strength and endurance",
    "Maintain a healthy lifestyle",
  ];

  return (
    <View>
      <ProfileProp
        fullName={fullName}
        username={username}
        userImage={userImage}
        aboutBio={aboutBio}
        posts={posts}
        followers={followers}
        following={following}
      />
      <Post />
    </View>
  );
};

export default UserProfileScreen;
