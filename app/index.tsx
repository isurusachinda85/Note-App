
import Task from "@/components/task";
import { useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";

const Index = () => {

  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([""]);

  const handleAddTask = () => {
    if (task.trim().length > 0) {
      setTaskItems([...taskItems, task]);
      setTask("");
    }
  }

  return (
    <View className="bg-gray-200 flex-1">

      <View className="pt-16 pl-5 pr-5">
        <Text className="font-bold text-2xl ">Today 's tasks</Text>

        <View className="pt-5">
          {
            taskItems.map((item, index) => {
              return <Task key={index} text={item} />
            })
          }

        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}
        className="absolute bottom-6 w-[100%] flex-row justify-around items-center ">
        <TextInput placeholder="Write a task"
          className="bg-white rounded-3xl w-[230px] p-3 border border-gray-300"
          value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={handleAddTask}>
          <View className="w-[60px] h-[60px] bg-white rounded-full border border-gray-300 items-center justify-center">
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Index;
