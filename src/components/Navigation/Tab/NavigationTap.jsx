import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHome from '../Stack/StackHome';
import StackSearch from '../Stack/StackSearch';
import { Ionicons } from '@expo/vector-icons'; // Usando @expo/vector-icons como ejemplo
import StackProfile from '../Stack/StackProfile';
const Tab = createBottomTabNavigator();


export default function NavigationTap() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: '#213157',
        borderTopWidth: 0,
        position: 'absolute', 
        bottom: 15, 
        left: '5%', 
        right: '5%',
        borderRadius: 20, 
        height: 60, 
      },
    
    }}
    keyboardHidesTabBar={true} // This will prevent the tab bar from shrinking when the keyboard is shown
    >
        <Tab.Screen name="Home" component={StackHome}options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name='ios-home' size={size} color={'white'}/>
          ),
        }}

        />
        <Tab.Screen name='Search' component={StackSearch}
          options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" size={size} color={'white'} />
          )}} 
        />
         <Tab.Screen name='Profile' component={StackProfile}
          options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" size={size} color={'white'} />
          )}} 
        />
    </Tab.Navigator>
  )
}