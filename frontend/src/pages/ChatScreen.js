import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import axios from "axios";

const ChatScreen = () => {
  //   const [userInput, setUserInput] = useState("");
  //   const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message },
          ],
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
            "Content-Type": "application/json",
          },
        }
      );
      // Handle the response and update the chat UI
    } catch (error) {
      console.error("Error sending message to ChatGPT:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <Text
            key={index}
            style={msg.role === "user" ? styles.userMessage : styles.botMessage}
          >
            {msg.content}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={userInput}
          onChangeText={setUserInput}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
  },
  userMessage: {
    textAlign: "right",
    marginBottom: 5,
  },
  botMessage: {
    textAlign: "left",
    marginBottom: 5,
  },
});

export default ChatScreen;
