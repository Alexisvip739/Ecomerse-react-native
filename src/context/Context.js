import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, Button } from 'react-native';

export const addProductToStorage = async (product) => {
  try {
    let products = await AsyncStorage.getItem('products');

    if (products) {
      products = JSON.parse(products);
      products.push(product);
    } else {
      products = [product];
    }

    await AsyncStorage.setItem('products', JSON.stringify(products));
  } catch (error) {
    console.error('Error adding product to storage:', error);
  }
};


