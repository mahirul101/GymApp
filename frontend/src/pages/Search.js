import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UserItem from "../components/UserItem";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchUsers = async () => {
    setIsLoading(true);
    // Replace this with your API call logic to search for users
    // Example: const response = await fetch(`https://yourapi.com/users?search=${searchQuery}`);
    // const data = await response.json();
    // setUsers(data.users);

    // Simulated API response
    setTimeout(() => {
      setUsers([
        {
          id: 1,
          fullName: "John Doe",
          username: "doejohn",
          userImage:
            "https://media.licdn.com/dms/image/C4E03AQFhbJrpRIT7bw/profile-displayphoto-shrink_400_400/0/1651801323852?e=1711584000&v=beta&t=W7G9pOl0PGRlgXkpMZIQsHxZgO3p2DfoWVHdpt5dL8s",
        },
        {
          id: 2,
          fullName: "Jane Smith",
          username: "theSmith",
          userImage:
            "https://media.licdn.com/dms/image/C4E03AQFFLjP19HWKDw/profile-displayphoto-shrink_400_400/0/1658897562511?e=1711584000&v=beta&t=NUvVrx6E_LRxRdGt1rioxe15lZXsD85K9PIbMxf8jMw",
        },
        {
          id: 3,
          fullName: "Bob Johnson",
          username: "bobbyjohn",
          userImage:
            "https://media.licdn.com/dms/image/D5603AQEc6r1yindqVQ/profile-displayphoto-shrink_400_400/0/1671588060033?e=1711584000&v=beta&t=Zgb2gcaz4uWJbpzL8uZ8Z1yF4dDJMuQ0ChQGlGjF5vY",
        },
        // Add more dummy users here
      ]);
      setIsLoading(false);
    }, 2000);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.topBar}>
          <MaterialIcons
            name="search"
            size={25}
            color="black"
            style={{ marginHorizontal: 10 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Find your buddies"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={searchUsers}
            returnKeyType="search"
          />
        </View>
        {isLoading ? (
          <Text style={{ textAlign: "center" }}>Loading...</Text>
        ) : (
          <View style={styles.userContainer}>
            <FlatList
              data={users}
              renderItem={({ item }) => (
                <UserItem
                  userImage={item.userImage}
                  fullName={item.fullName}
                  username={item.username}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    paddingHorizontal: 10,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginVertical: 5,
    padding: 10,
    paddingHorizontal: 97,
    // backgroundColor: "black",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default Search;
