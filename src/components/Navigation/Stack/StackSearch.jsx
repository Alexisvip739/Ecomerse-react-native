import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../../Search/Search'
const Stack= createStackNavigator()
export default function StackSearch() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='search' component={Search} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}