import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../Profile/Profile';

const Stack=createStackNavigator();
export default function StackProfile() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Perfil' component={Profile} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}