import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";
import { Picker } from 'react-native-picker';
import React, { useContext, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import SelectList from "react-native-dropdown-select-list";
import axios from "axios";
import Config from "react-native-config";

function SessionInfo() {
  const [WorkoutType, setWorkoutType] = React.useState("");
  const [Location, setLocation] = React.useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [date, setDate] = React.useState(new Date());
  const [Time, setTime] = React.useState("");

  const [showDate, setShowDate] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);


  const [selected, setSelected] = React.useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setShowTime(false);
    setDate(currentDate);
  };

  const navigation = useNavigation();

  const SessionInfo = () => {
    if (WorkoutType === "") {
      alert("Please select your workout type");
      return;
    } else if (Location === "") {
      alert("Please enter the location of the workout");
      return;
    } else if (date === "") {
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
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom :100 }}>
          <View style={{ flex: 0, marginRight: 10, width:120, marginLeft: 30 }}>
          <Text style={{ fontSize: 18}}>Date:</Text>
              {/* <View style={{ backgroundColor: "#E5E7EB", padding: 2, borderRadius: 8, marginBottom: 14, alignItems: "center" }}> */}
              <DateTimePicker 
              style={{ flex: 0}}
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
              />
              {/* </View> */}
          </View>

          <View style={{flex: 0, marginRight: 85, width:120, marginLeft: 20 }}>
              {/* <View style={{ backgroundColor: "#E5E7EB", padding: 2, borderRadius: 8, marginBottom: 100, alignItems: "center"}}> */}
              <Text style={{ fontSize: 18 }}>Time:</Text>
              <DateTimePicker
                  style={{ flex: 0}}
                  value={date}
                  mode="time"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
              />
          </View>
      </View>
      </View> 

    
      <View className="w-full">
          <TouchableOpacity
          onPress={SessionInfo}
          className="w-80 bg-red-700 p-4 rounded-2xl mb-20 mx-auto text-center"
          
          >
          <Text className="text-center text-white font-bold">Create Session</Text>
          </TouchableOpacity>
      </View>
      </View>
      </View>
  );
}


export default SessionInfo;