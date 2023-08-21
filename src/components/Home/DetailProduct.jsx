import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {addProductToStorage} from '../../context/Context'
export default function DetailProduct({ route, navigation }) {
  const { product } = route.params;
  const handleGoBack = () => {
    navigation.goBack();
  };


  const handleAddProduct = () => {
    console.log('Adding product:', product.id);
    addProductToStorage(product);
    
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="ios-arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image style={styles.mainImage} source={{ uri: product.images[0] }} />
        <View style={styles.detailInfo}>
          <Text style={styles.textTitleImage}>{product.name}</Text>
          <Text style={styles.textPriceImage}>{product.price}.0$</Text>
        </View>
        <Text style={styles.textCategoryImage}>{product.category}</Text>
        <Text style={styles.detailDescriptionTitle}>{product.description}</Text>
        <View style={styles.previewContainer}>
          <Text style={styles.textPreview}>Preview Product</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {product.images.map((image, index) => (
              <Image key={index} style={styles.previewImage} source={{ uri: image + 1 }} />
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.buttonShop} onPress={handleAddProduct}>
          <Ionicons name="ios-cart" size={24} color="white" />
          <Text style={styles.textprice}>Comprar Producto</Text>
        </TouchableOpacity>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111D38',
  },
  scrollContainer: {
    flex: 1,
    marginTop: 10,
  },
  buttonShop: {
    backgroundColor: '#213157',
    padding: 10,
    width:"80%",
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 90,
    borderRadius:10,
    gap:10,
    flexDirection:'row'
  },
  textprice:{
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  mainImage: {
    width: 420,
    height: 420,
    resizeMode: 'cover',
  },
  detailInfo: {
    width:'100%',
    marginTop:20,
    marginBottom:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textTitleImage: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    
  },
  textPriceImage: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#02FF86',
    padding: 3,
    alignSelf:'flex-end',
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  textCategoryImage: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#02FF86',
    padding: 2,
    paddingHorizontal: 15,
    alignSelf:'flex-start',
    borderRadius: 15,
    marginBottom: 10,
  },
  detailDescriptionTitle: {
    color: 'white',
    marginBottom: 20,
    fontWeight: '500',
    fontSize:20

  },
  previewContainer: {
    marginTop: 20,
  },
  textPreview: {
    color: 'white',
    backgroundColor: '#172A54',
    fontSize: 17,
    padding: 6,
    alignSelf:'flex-start',
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  previewImage: {
    width: 400,
    height: 200,
    marginHorizontal: 5,
    borderRadius: 10,
    marginBottom:20,
    resizeMode: 'cover',
  },
  backButton: {
    top: 40,
    left: 10,
    position: 'absolute',
    zIndex: 1,
  },
});
