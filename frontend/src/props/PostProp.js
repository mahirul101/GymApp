import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PostProp = ({ post }) => {
  return (
    <View style={styles.container}>
      {post.imageUri && (
        <Image source={{ uri: post.imageUri }} style={styles.image} />
      )}
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <Text style={styles.author}>Author: {post.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fdfdfd",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: "gray",
    textAlign: "right",
  },
});

export default PostProp;
