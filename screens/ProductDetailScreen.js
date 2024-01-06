import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { id, title, productImage, price, category } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={{ uri: productImage }} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>€ {price}</Text>
      <Text style={styles.productCategory}>{category}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductDetailScreen;