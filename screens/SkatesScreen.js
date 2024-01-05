import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import Product from '../components/Product';

const SkatesScreen = ({ route, navigation }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products } = route.params;

  useEffect(() => {
    if (products) {
      const filtered = products.filter((product) => product.categoryTitle === route.name);
      setFilteredProducts(filtered);
    }
  }, [route.name, products]);


  return (
    <View>
      <Text>{route.name}</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product
            id={item.id}
            category={item.categoryTitle}
            title={item.title}
            productImage={item.productImage}
            price={item.price}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default SkatesScreen;
