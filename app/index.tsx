
import Task from "@/components/task";
import { useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";

const Index = () => {

  const [task, setTask] = useState();

  const handleAddTask = () => {
    console.log(task);

  }

  return (
    <View className="bg-gray-200 flex-1">

      <View className="pt-16 pl-5 pr-5">
        <Text className="font-bold text-2xl ">Today 's tasks</Text>

        <View className="pt-5">
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}
        className="absolute bottom-6 w-[100%] flex-row justify-around items-center ">
        <TextInput placeholder="Write a task" className="bg-white rounded-3xl w-[230px] p-3 border border-gray-300" />

        <TouchableOpacity>
          <View className="w-[60px] h-[60px] bg-white rounded-full border border-gray-300 items-center justify-center">
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Index;
