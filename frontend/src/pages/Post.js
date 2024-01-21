import React from "react";
import { View, ScrollView, Text } from "react-native";
import PostProp from "../props/PostProp";

const Post = () => {
  const posts = [
    {
      title: "Sample Post Title 1",
      content: "This is the content of the first post...",
      author: "John Doe",
      imageUri:
        "https://instagram.fyhu1-1.fna.fbcdn.net/v/t51.2885-15/416415002_336627009178033_5797433643629216573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fyhu1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=B1WghTyPIHwAX8rWY1t&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzI3MTU3ODUwMTIxMzU3MzUwMg%3D%3D.2-ccb7-5&oh=00_AfABYdmVvZSyL-AH21xY1SBzl7m3gX3-VMfJQ4aAqhjoWw&oe=65B075E1&_nc_sid=b41fef",
    },
    {
      title: "Sample Post Title 2",
      content: "This is the content of the second post...",
      author: "Jane Smith",
      imageUri:
        "https://instagram.fyhu1-1.fna.fbcdn.net/v/t51.2885-15/411751345_898865054728413_1960504731367647899_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyIn0&_nc_ht=instagram.fyhu1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=PiW0wp_ad2cAX8Vx8Kj&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzI2MDcxNDgzMjg1NDQ5Mzg2MQ%3D%3D.2-ccb7-5&oh=00_AfAyNOvR-OSmL2-FD3RpxpFdaceEK8VPl9CcVDY8-HfNcg&oe=65B1DE3F&_nc_sid=b41fef",
    },
    // Add more posts here
  ];

  return (
    <View>
      {posts.map((post, index) => (
        <PostProp key={index} post={post} />
      ))}
    </View>
  );
};

export default Post;
