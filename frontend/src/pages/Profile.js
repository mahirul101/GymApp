import React from "react";
import { SafeAreaView } from "react-native";
import ProfileProp from "../props/ProfileProp";
import { useUser } from "../../../backend/User";

const UserProfileScreen = () => {
  const {user} = useUser();
  if (user === null) return;
  // Replace these with actual user data
  const fullName = user.fullName;
  const username = user.username;
  const userImage = user.profilePicture;
  const aboutBio = user.aboutBio;
  const posts = user.myPosts.length;
  const followers = user.followers.length;
  const following = user.following.length;
  // const aboutBio = "Fitness enthusiast and aspiring bodybuilder";
  // const posts = 10;
  // const followers = 69;
  // const following = 132;

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
