import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

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
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for users"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={searchUsers}
      />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
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
