import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import OpenAI from "openai";
import { SafeAreaView } from "react-native-safe-area-context";

const Chatbot = () => {
  const [completion, setCompletion] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openai = new OpenAI({
    apiKey: "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",
  });

  const fetchCompletion = async () => {
    if (userInput === "" || !userInput) {
      alert("Please enter your details.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: userInput,
          },
        ],
        model: "gpt-3.5-turbo",
      });

      setCompletion(response.choices[0].message.content);
      console.log(response.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching completion:", error);
      setCompletion("Error fetching response.");
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>AI Fitness Coach</Text>
        </View>
        <Text style={styles.paragraph}>
          Enter your age, weight, height, gender, any health concerns or
          injuries, and fitness level. Finally, add your goals.
        </Text>
        <View>
          <TextInput
            style={styles.largeInput}
            onChangeText={setUserInput}
            value={userInput}
            placeholder="Type here..."
            multiline={true}
          />
        </View>

        <Button title="Get Your Personalized Plan" onPress={fetchCompletion} />
        <ScrollView>
          {isLoading ? (
            <Text>Please wait while we generate your plan...</Text>
          ) : (
            <Text style={styles.paragraph}>{completion}</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Chatbot;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  paragraph: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 20,
    textAlign: "justify",
  },
  largeInput: {
    fontSize: 20,
    height: 100,
    marginVertical: 5,
    padding: 10,
    paddingHorizontal: 97,
  },
});
