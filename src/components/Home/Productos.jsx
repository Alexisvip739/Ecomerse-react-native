import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getProducts, getCategory } from '../API/Api';

const windowWidth = Dimensions.get('window').width;

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsAll = await getProducts();
        setProducts(productsAll);
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    };

    const fetchCategories = async () => {
      try {
        const categoriesAll = await getCategory();
        setCategories(categoriesAll);
      } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const handlePress = (item) => {
    const product = {
      name: item.title,
      price: item.price,
      images: item.images,
      description: item.description,
      category: item.category.name,
    };
    navigation.navigate('DetailProduct', { product });
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.name === selectedCategory.name)
    : products;

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productContainer} onPress={() => handlePress(item)}>
      <View style={styles.productItem}>
        <Image style={styles.productImage} source={{ uri: item.images[0] }} />
        <View style={styles.productDetail}>
          <Text style={styles.textTitleImage}>{item.title}</Text>
          <Text style={styles.textPrice}>{item.price}.0$</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={falseg} style={styles.categoriesContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            !selectedCategory && styles.selectedCategoryButton,
          ]}
          onPress={() => handleCategoryPress(null)}
        >
          <Text
            style={[
              styles.categoryText,
              !selectedCategory && styles.selectedCategoryText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory && selectedCategory.name === category.name && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory && selectedCategory.name === category.name && styles.selectedCategoryText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoriesContainer: {
    marginBottom: 10,
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
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: 10,
  },
  textPrice: {
    color: 'black',
    fontWeight: '900',
    fontSize: 14,
    backgroundColor: '#02FF86',
    padding: 2,
    borderRadius: 5,
    alignContent: 'flex-start',
    width: 50,
  },
  productDetail: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  categoryButton: {
    marginRight: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#213157',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  selectedCategoryButton: {
    backgroundColor: '#172A54',
        borderRadius: 20,

  },
  selectedCategoryText: {
    color: 'white',
  },
});
