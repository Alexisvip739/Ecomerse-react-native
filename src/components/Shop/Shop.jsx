import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icon library


export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const retrievedProducts = await AsyncStorage.getItem('products'); // Use AsyncStorage
      const shopProducts = JSON.parse(retrievedProducts) || []; // Return an empty array if no products are stored
      setProducts(shopProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price} $</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.TopShop}>
      <Text style={styles.heading}>Shop</Text>
      <AntDesign name="shoppingcart" size={30} color="white" />

      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111D38',
    marginTop: Constants.statusBarHeight,
   
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 20,
    alignSelf: 'center',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  productName: {
    color: 'white',
    fontSize: 18,
  },
  productPrice: {
    color: '#02FF86',
    fontSize: 18,
    fontWeight: 'bold',
  },
  TopShop:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10
  }
});
