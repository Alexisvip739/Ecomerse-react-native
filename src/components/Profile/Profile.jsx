import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#111D38',
    marginTop: Constants.statusBarHeight,
},
})