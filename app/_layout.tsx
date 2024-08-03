import { Stack } from 'expo-router'
import { View, Text } from 'react-native'


const RootLayout = () => {
    return (
        <View className='flex-1 w-full'>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' />
            </Stack>
        </View>
    )
}

export default RootLayout