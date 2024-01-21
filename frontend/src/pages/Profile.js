import React from "react";
import { SafeAreaView } from "react-native";
import ProfileProp from "../props/ProfileProp";
import { useUser } from "../../../backend/User";
import {Text} from "react-native-elements";
const UserProfileScreen = () => {
  const {user} = useUser();

  if (!user) {
    // If user is null, return loading state or null
    return <Text>Loading...</Text>; // Or any other placeholder you wish to show
  }

  // Now we can safely access user properties because we've ensured user is not null
  const email = user.email || '';
  const fullName = user.fullName || 'N/A';
  const username = user.username || 'N/A';
  const userImage = user.profilePicture || 'default_image.png'; // Replace with an actual default image if necessary
  const aboutBio = user.aboutBio || 'No bio available';
  const posts = user.myPosts ? user.myPosts.length : 0;
  const followers = user.followers ? user.followers.length : 0;
  const following = user.following ? user.following.length : 0;

  return (
    <SafeAreaView>
      <ProfileProp
        email={email}
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
