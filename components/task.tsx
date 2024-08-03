import { View, Text, TouchableOpacity } from 'react-native'


const Task = (props: any) => {
    return (
        <View className='bg-white p-5 rounded-lg'>
            <View className=''>
                <TouchableOpacity></TouchableOpacity>
                <Text>{props.text}</Text>
            </View>

            <View className=''></View>
        </View>
    )
}

export default Task