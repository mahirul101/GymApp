import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import SelectList from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import Config from "react-native-config";

function SessionInfo() {
  const apiKey = Config.GOOGLEMAPS_API_KEY;

  const [WorkoutType, setWorkoutType] = useState("");
  const [Location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");

  const [selected, setSelected] = useState("");

  const navigation = useNavigation();

  const SessionInfo = () => {
    if (WorkoutType === "") {
      alert("Please select your workout type");
      return;
    } else if (Location === "") {
      alert("Please enter the location of the workout");
      return;
    } else if (Date === "") {
      alert("Please enter the date of the workout");
      return;
    } else if (Time === "") {
      alert("Please set the time of your workout");
      return;
    }

    navigation.navigate("SessionStack");
  };

  const handleLocationChange = async (text) => {
    setLocation(text);
    if (text.length > 2) {
      // Trigger API call after 2 characters
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=${Config.GOOGLEMAPS_API_KEY}`
        );
        setSuggestions(response.data.predictions);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionPress = (suggestion) => {
    setLocation(suggestion.description); // Set the clicked suggestion as the location
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />

      <View className="flex-1 justify-around pt-40 pb-10">
        <View className="items-center">
          <Text className="text-5xl font-bold">Session Info</Text>
        </View>

        <View className="mx-4 space-y-4">
          <View className="bg-gray-200 p-5 rounded-2xl w-full">
            <RNPickerSelect
              onValueChange={(value) => setWorkoutType(value)}
              items={[
                { label: "Cardio", value: "cardio" },
                { label: "Arms", value: "arms" },
                { label: "Chest", value: "chest" },
                { label: "Back", value: "back" },
                { label: "Shoulders", value: "shoulders" },
                { label: "Legs", value: "legs" },
                { label: "Upper Body", value: "upperbody" },
                { label: "Lower Body", value: "lowerbody" },
              ]}
              placeholder={{
                label: "Select a workout type...",
                value: null,
              }}
              style={{ color: "black" }}
            />
          </View>
          <View className="bg-gray-200 p-5 rounded-2xl w-full">
            <TextInput
              placeholder="Location"
              value={Location}
              onChangeText={handleLocationChange}
              placeholderTextColor="gray"
              style={{ color: "black" }}
            />
            {suggestions.length > 0 && (
              <ScrollView style={{ backgroundColor: "#fff", maxHeight: 200 }}>
                {suggestions.map((suggestion, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSuggestionPress(suggestion)}
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                    }}
                  >
                    <Text style={{ borderRadius: 10 }}>
                      {suggestion.description}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </View>
          <View className="bg-gray-200 p-5 rounded-2xl w-full">
            <TextInput
              placeholder="Date"
              value={Date}
              onTextInput={setDate}
              placeholderTextColor="gray"
              className="text-black" // Adjust the text color to ensure visibility
            />
          </View>
          <View className="bg-gray-200 p-5 rounded-2xl w-full mb-10">
            <TextInput
              placeholder="Time"
              value={Time}
              onTextInput={setTime}
              placeholderTextColor="gray"
              className="text-black" // Adjust the text color to ensure visibility
              secureTextEntry
            />
          </View>
          <View className="w-full">
            <TouchableOpacity
              onPress={SessionInfo}
              className="w-full bg-red-700 p-3 rounded-2xl mb-3"
            >
              <Text className="text-center text-white font-bold">
                Create Session
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SessionInfo;
