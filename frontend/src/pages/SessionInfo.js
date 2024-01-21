import {
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Button,
    StyleSheet,
  } from "react-native";
  import { Picker } from 'react-native-picker';
  import React, { useContext, } from "react";

  import DateTimePicker from '@react-native-community/datetimepicker';
  import SelectList from 'react-native-dropdown-select-list';
  import { useNavigation } from "@react-navigation/native";
  
  function SessionInfo() {
    const [WorkoutType, setWorkoutType] = React.useState("");
    const [Location, setLocation] = React.useState("");
    const [date, setDate] = React.useState(new Date());
    const [Time, setTime] = React.useState("");

    const [showDate, setShowDate] = React.useState(false);
    const [showTime, setShowTime] = React.useState(false);

    const [show, setShow] = React.useState(false);
    const [mode, setMode] = React.useState('date');

    const [selected, setSelected] = React.useState("");

    const showMode = (currentMode) => {
        setMode(currentMode);
        if (currentMode === "date") {
          setShowDate(true);
          setShowTime(false);
        } else if (currentMode === "time") {
          setShowDate(false);
          setShowTime(true);
        }
      };
    
      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(false);
        setShowTime(false);
        setDate(currentDate);
      };

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
      } else if (date === "") {
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

                {/* </View> */}
            </View>
        </View>

        {/* <View className="bg-gray-200 p-2 rounded-2xl w-full">
        {/* <Button title="Select date" onPress={() => showMode("date")} />
            {showDate && ( */}
            {/* <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
            /> */}
            {/* )}
            <StatusBar style="auto" /> */}
        </View> 

        {/* <View className="bg-gray-200 p-2 rounded-2xl w-full mb-14">
            {/* <Button title="Show Time Picker" onPress={() => showMode("time")} /> */}
            {/* {showTime && ( */}
            {/* <DateTimePicker
                value={date}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={onChange}
            /> */}
            {/* )}
                        <StatusBar style="auto" /> */}
        {/* </View> */}
   
    
       
            {/* <StatusBar style = "auto" />
            <TextInput
            placeholder="Date"
            value={Date}
            onTextInput={setDate}
            placeholderTextColor="gray"
            className="text-black" // Adjust the text color to ensure visibility
            /> */}

        {/* <View className="bg-gray-200 p-5 rounded-2xl w-full mb-10">
            <TextInput
            placeholder="Time"
            value={Time}
            onTextInput={setTime}
            placeholderTextColor="gray"
            className="text-black" // Adjust the text color to ensure visibility
            secureTextEntry
            />
        </View> */}
        <View className="w-full">
            <TouchableOpacity
            onPress={SessionInfo}
            className="w-80 bg-red-700 p-4 rounded-2xl mb-20 mx-auto text-center"
            
            >
            <Text className="text-center text-white font-bold">Create Session</Text>
            </TouchableOpacity>
        </View>
            
            
  
        </View>
      
    );
  }
  
  export default SessionInfo;
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});