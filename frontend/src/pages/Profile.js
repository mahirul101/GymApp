import React from "react";
import { SafeAreaView } from "react-native";
import ProfileProp from "../props/ProfileProp";
import { useUser } from "../../../backend/User";

const UserProfileScreen = () => {
  const { user } = useUser();
  // Replace these with actual user data
  const fullName = user.fullName;
  const username = user.username;
  const userImage =
    "https://media.licdn.com/dms/image/D5635AQGOXOYrGN5MTw/profile-framedphoto-shrink_400_400/0/1653892732166?e=1706389200&v=beta&t=L9AIVErTwQDApoklSlzQhpOP_KPqVX59AyYMCRLqvQg"; // URL to the user's profile image

  const aboutBio = "Fitness enthusiast and aspiring bodybuilder";
  const posts = 10;
  const followers = 69;
  const following = 132;

  return (
    <SafeAreaView>
      <ProfileProp
        fullName={fullName}
        username={username}
        userImage={userImage}
        followers={followers}
        following={following}
        aboutBio={aboutBio}
        posts={posts}
      />
    </SafeAreaView>
  );
};

export default UserProfileScreen;
