import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

const WorkoutPlan = () => {
  const [numericalValue, setNumericalValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      // Call your custom GPT API here and pass the numericalValue and textValue as parameters
      const apiResponse = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numericalValue, textValue }),
      });

      const data = await apiResponse.json();
      setResponse(data.response);
    } catch (error) {
      Alert.alert("Error", "Failed to call the API");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a numerical value"
        value={numericalValue}
        onChangeText={setNumericalValue}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Enter some text"
        value={textValue}
        onChangeText={setTextValue}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Text>{response}</Text>
    </View>
  );
};

export default WorkoutPlan;
