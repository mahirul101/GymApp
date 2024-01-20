import React from "react";
import { View, Text } from "react-native";
import ProfileProp from "../props/ProfileProp";

const UserProfileScreen = () => {
  // Replace these with actual user data
  const fullName = "Mahirul Islam";
  const username = "TheMahirul";
  const userImage =
    "https://media.licdn.com/dms/image/D5635AQGOXOYrGN5MTw/profile-framedphoto-shrink_400_400/0/1653892732166?e=1706389200&v=beta&t=L9AIVErTwQDApoklSlzQhpOP_KPqVX59AyYMCRLqvQg"; // URL to the user's profile image

  const aboutBio = "Fitness enthusiast and aspiring bodybuilder";
  const followers = 1000;
  const following = 500;
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
        followers={followers}
        following={following}
        goals={goals}
      />
    </View>
  );
};

export default UserProfileScreen;
