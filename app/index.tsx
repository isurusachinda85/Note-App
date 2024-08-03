
import Task from "@/components/task";
import { View, Text } from "react-native";

const Index = () => {
  return (
    <View className="bg-gray-200 flex-1">

      <View className="pt-16 pl-5 pr-5 border">
        <Text className="font-bold text-2xl ">Today 's tasks</Text>

        <View className="pt-5">
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </View>
      </View>
    </View>
  );
};

export default Index;
