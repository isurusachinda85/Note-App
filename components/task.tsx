import { View, Text, TouchableOpacity } from 'react-native'


const Task = (props: any) => {
    return (
        <View className='bg-white p-5 rounded-lg flex flex-row items-center justify-between mb-5 '>

            <TouchableOpacity className='w-[24px] h-[24px] bg-blue-400 rounded-md mr-2'></TouchableOpacity>

            <View className='flex-row items-center w-[80%]'>
                <Text className='w-full'>{props.text}</Text>
            </View>

            <View className='w-[12px] h-[12px] border border-blue-500 rounded-full'></View>
        </View>
    )
}

export default Task