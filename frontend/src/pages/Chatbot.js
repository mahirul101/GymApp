import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import OpenAI from "openai";

const Chatbot = () => {
  const [completion, setCompletion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openai = new OpenAI({
    apiKey: "",
  });

  const fetchCompletion = async () => {
    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Hi, I am 20 years old, 150lbs, 5ft4in, intermediate lifter with no health concerns and I want to bench 225lbs in 3 months, I currently bench 185lbs. Create me a personalized workout plan",
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch completion when the component mounts
    fetchCompletion();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? <Text>Loading...</Text> : <Text>{completion}</Text>}
      <Button title="Get New Completion" onPress={fetchCompletion} />
    </View>
  );
};

export default Chatbot;
