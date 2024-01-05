import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Product from '../components/Product';

const SkatesScreen = ({ products }) => {
  const skates = products ? products.filter((item) => item.categoryTitle === 'Skates') : [];

  return (
    <View>
      <Text>Skates Screen</Text>
      <FlatList
        data={skates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product style={{ height: '100%', width: 100 }}
            id={item.id}
            title={item.title}
            price={item.price}
            productImage={item.productImage}
          />
        )}
      />
    </View>
  );
};

export default SkatesScreen;