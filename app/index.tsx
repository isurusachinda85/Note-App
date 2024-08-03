
import Task from "@/components/task";
import { View, Text } from "react-native";

const Index = () => {
  return (
    <View className="bg-gray-300 flex-1">
      <View className="border pt-16">
        <Text className="font-bold text-2xl pl-5">Today 's tasks</Text>

        <View className="border pl-5 pr-5">
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
          <Task text={"Task 3"} />
        </View>
      </View>
    </View>
  );
};

export default Index;
