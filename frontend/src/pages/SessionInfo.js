import {
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
  } from "react-native";
  import React, { useContext } from "react";
  import SelectList from 'react-native-dropdown-select-list';
  import { useNavigation } from "@react-navigation/native";
  
  function SessionInfo() {
    const [WorkoutType, setWorkoutType] = React.useState("");
    const [Location, setLocation] = React.useState("");
    const [Date, setDate] = React.useState("");
    const [Time, setTime] = React.useState("");

    const [selected, setSelected] = React.useState("");

    const data = [
        {key:'1',value:'Cardio'},
        {key:'2',value:'Legs'},
        {key:'3',value:'Arms'},
        {key:'4',value:'Chest'},
        {key:'5',value:'Back'},
        {key:'6',value:'Shoulders'},        
    ];
  
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

    return (
      <View className="bg-white h-full w-full">
        <StatusBar style="light" />
  
        <View className="flex-1 justify-around pt-40 pb-10">
          <View className="items-center">
            <Text className="text-5xl font-bold">Session Info</Text>
          </View>
  
          <View className="mx-4 space-y-4">
            <View className="bg-gray-200 p-5 rounded-2xl w-full">
              <TextInput
                placeholder="Workout Type"
                placeholderTextColor="gray"
                value={WorkoutType}
                onTextInput={setWorkoutType}
                className="text-black" // Adjust the text color to ensure visibility
              />
            </View>
            <View className="bg-gray-200 p-5 rounded-2xl w-full">
              <TextInput
                placeholder="Location"
                value={Location}
                onTextInput={setLocation}
                placeholderTextColor="gray"
                className="text-black" // Adjust the text color to ensure visibility
              />
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
                <Text className="text-center text-white font-bold">Create Session</Text>
              </TouchableOpacity>
            </View>
            
            
          </View>
        </View>
      </View>
    );
  }
  
  export default SessionInfo;
  