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
import { addMySession } from "../../../backend/Database";
import { useUser } from "../../../backend/User";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ArrowBackIos } from "@mui/icons-material";

function SessionInfo() {
  const [WorkoutType, setWorkoutType] = React.useState("");
  const [Location, setLocation] = React.useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [date, setDate] = React.useState(new Date());
  const [Time, setTime] = React.useState(new Date());

  const [showDate, setShowDate] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);

  const { user, setUser } = useUser();
  if (user === null) return;


  const [selected, setSelected] = React.useState("");

  const navigation = useNavigation();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setShowTime(false);
    setDate(currentDate);
  };
  const SessionInfo = async () => {
    if (WorkoutType === "") {
      alert("Please select your workout type");
      return;
    } else if (Location === "") {
      alert("Please enter the location of the workout");
      return;
    } else if (date === "") {
      alert("Please enter the date of the workout");
      return;
    }

    const workoutItems = [
      { label: 'Cardio', value: 'cardio' },
      { label: 'Arms', value: 'arms' },
      { label: 'Chest', value: 'chest' },
      { label: 'Back', value: 'back' },
      { label: 'Shoulders', value: 'shoulders' },
      { label: 'Legs', value: 'legs' },
      { label: 'Upper Body', value: 'upperbody' },
      { label: 'Lower Body', value: 'lowerbody' },
    ];

    const handleWorkoutTypeChange = (value) => {
      const selectedItem = workoutItems.find(item => item.value === value);
      if (selectedItem) {
        setWorkoutType(selectedItem.label);
      } else {
        setWorkoutType('');
      }
    };

    const [datePart, timePart] = date.toISOString().split('T');
    const formattedTime = timePart.split(".")[0];

    try {
      const data = await addMySession(user.email, user.username, WorkoutType, Location, datePart, formattedTime);

      console.log(data);
      if (data.success) {
        alert(data.message);
        setUser(data.userDetails);
        navigation.navigate("Calendar");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Error adding session: " + error.message);
    }
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
    <SafeAreaView>
      <View className=" h-full w-full">
        <StatusBar style="light" />
        <View className="flex-1 justify-around pt-40 pb-10">
          <View style={{ position: 'absolute', top: 50, left: 10 }}>
            {/* <Button title="< Back to Profile" onPress={() => navigation.goBack()} color="#B91C1C" /> */}
            <TouchableOpacity
              style={styles.editIcon} // Replace with actual email
            >
              <MaterialIcons name="ArrowBackIos" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View className="items-center">
            <Text className="text-5xl font-bold" style={{ marginBottom: 0 }}>Session Info</Text>
          </View>

          <View className="mx-4 space-y-4" >
            <View className="bg-gray-200 p-5 rounded-2xl w-full" style={{ marginBottom: 20 }}>
              <RNPickerSelect
                onValueChange={(value) => setWorkoutType(value)}
                items={[
                  { label: "Cardio", value: "Cardio" },
                  { label: "Arms", value: "Arms" },
                  { label: "Chest", value: "Chest" },
                  { label: "Back", value: "Back" },
                  { label: "Shoulders", value: "Shoulders" },
                  { label: "Legs", value: "Legs" },
                  { label: "Upper Body", value: "Upperbody" },
                  { label: "Lower Body", value: "Lowerbody" },
                ]}
                placeholder={{
                  label: "Select a workout type...",
                  value: null,
                }}
                style={{
                  inputIOS: { color: 'black' },
                  inputAndroid: { color: 'black' },
                  placeholder: { color: 'grey' },
                }}
              />
            </View>
            <View className="bg-gray-200 p-5 rounded-2xl w-full">
              <TextInput
                placeholder="Location"
                value={Location}
                onChangeText={handleLocationChange}
                placeholderTextColor="grey"
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
            <View style={{ flexDirection: "row", gap: 70, marginBottom: 100 }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 10 }}>Date:</Text>
                <DateTimePicker
                  style={{ flex: 0 }}
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              </View>

              <View style={{ flexDirection: 'column' }}>
                {/* <View style={{ backgroundColor: "#E5E7EB", padding: 2, borderRadius: 8, marginBottom: 100, alignItems: "center"}}> */}
                <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 10 }}>Time:</Text>
                <DateTimePicker
                  style={{ flex: 0 }}
                  value={date}
                  mode="time"
                  is24Hour={true}
                  display="default"

                  onChange={onChange}

                />
              </View>
            </View>
          </View>


          <View style={styles.footer}>

            <TouchableOpacity
              onPress={SessionInfo}
              className="w-80 bg-red-700 p-4 rounded-2xl mb-20 mx-auto text-center"

            >
              <Text className="text-center text-white font-bold text-base font-semibold" style={{ fontSize: 20, fontWeight: 'bold' }}>Create Session</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    </SafeAreaView>
  );
}


export default SessionInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    backgroundColor: '#B91C1C',
    borderWidth: 1,
    borderColor: '#B91C1C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 100,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  editIcon: {
    position: 'absolute',
    left: 0, // Adjust as needed
    top: 0, // Adjust as needed
    backgroundColor: 'red', // Choose your color
    borderRadius: 20,
    padding: 5,
  }
});

