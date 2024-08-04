import { View, Text, TouchableOpacity } from 'react-native'


const Task = (props: any) => {
    return (
        <View className='bg-white p-5 rounded-lg flex flex-row items-start mb-5 '>


            <TouchableOpacity className='w-[24px] h-[24px] bg-blue-500 rounded-md mr-4'></TouchableOpacity>

            <View className='flex-row items-center w-[80%] '>
                <Text className='w-full'>{props.text}</Text>
            </View>


        </View>
    )
}

export default Task