import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput,FlatList,Image,Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import getProducts from '../API/Api';
const windowWidth = Dimensions.get('window').width;

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchProduct,setSearchProduct] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsAll = await getProducts();
        if (searchText) {
          const filteredProducts = productsAll.filter(result =>
            result.title.toLowerCase().includes(searchText.toLowerCase())
          );
          setSearchProduct(filteredProducts);
        } else {
          setSearchProduct([]); // Clear the search results when the search text is empty
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    };
  
    fetchProducts();
  }, [searchText]);
  

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const renderItem=({item})=>(
    console.log(item),
    <View style={styles.productContainer}>
      <View style={styles.productItem}>
        <Image
          style={styles.productImage}
          source={{ uri: item.images[0] }}
        />
        <View style={styles.productDetail}>
          <Text style={styles.textTitleImage}>{item.title}</Text>
          <Text style={styles.textPrice}>{item.price}.0$</Text>
        </View>
      </View>
    </View>
  )
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="ios-search" size={20} color="white" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={handleSearchTextChange}
          placeholderTextColor="white" // Set the placeholder text color to white
        />
      </View>

      <FlatList
        data={searchProduct}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Display two columns per row
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111D38',
    marginTop: Constants.statusBarHeight,
    padding: 20,

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    height:40,
    paddingHorizontal: 10,
    backgroundColor:'#213157'
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color:'white'
  },

  productContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 5,
    width: '50%',
  },
  productItem: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  productImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: 5,
    marginBottom: 9,
    
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  textTitleImage: {
    color: 'white', // Changed the text color for better visibility
    fontSize: 15,
    fontWeight: 'bold',
    textAlign:'start',
    width:'100%',
    marginBottom:10
  },
  textPrice: {
    color: 'black',
    fontWeight:'900',
    fontSize: 14,   
    backgroundColor:'#02FF86',
    padding:2,
    borderRadius:5,
    alignContent:'flex-start',
    width:50,
    textAlign:'center'
  
  },
  productDetail: {
    width:'100%',
    flexDirection: 'column', // Changed to column for title and price to stack
    justifyContent: 'flex-start', // Center the text vertically
    alignItems: 'start', // Center the text horizontally
  },
});
