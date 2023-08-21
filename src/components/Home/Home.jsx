import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icon library
import Productos from './Productos';
import { useNavigation } from '@react-navigation/native';



export default function Home() {
  const navigation = useNavigation();

  const handleShop=()=>{
    navigation.navigate('shopProduct')
  }
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <View style={styles.containerImage2}>
            <Image
                style={styles.image}
                source={require('../../../assets/profile_Platzi.jpg')}
            />
            <Text style={styles.textTitleImage}>Platzi</Text>
          </View>
          <TouchableOpacity
          style={styles.cartIconContainer}
          onPress={handleShop}
        >
          <View style={styles.cartIcon}>
            <AntDesign name="shoppingcart" size={30} color="white" />
          </View>
        </TouchableOpacity>
        </View>
        
        <Productos/>
      </View>
    );
  }
  

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111D38',
      marginTop: Constants.statusBarHeight,
    },
    textTitle: {
      color: 'white',
    },
    containerImage: {
      flexDirection: 'row',
      marginTop: 20,
      width: "100%",
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    containerImage2: {
        flexDirection: 'row',
        marginTop: 20,
        width: '80%',
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent:'flex-start',
        gap: 10,
      },
    image: {
      width: 60,
      height: 60,
      borderRadius: 10,
    },
    textTitleImage: {
      color: 'white',
      fontSize: 23,
      fontWeight: 'bold',
    },
    cartIconContainer: {
      alignItems: 'flex-end',
      marginTop: 20,
    },
    cartIcon: {
     
      borderRadius: 30,
      padding: 10,
    },
  });