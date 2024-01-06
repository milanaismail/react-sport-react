import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { id, title, productImage, price, category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.productCategory}>Home / {category}</Text>
      <Image style={styles.productImage} source={{ uri: productImage }} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>€ {price}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff',
    height: '100%',
  },
  productCategory: {
    fontSize: 20,
    backgroundColor: '#b3d1ff',
    color: 'black',
    width: '100%',
    height: 'auto',
    paddingVertical: 20,
    paddingLeft: 20,
    marginBottom: 20,

  },
  productImage: {
    width: 400,
    height: 400,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 5,
  }

});

export default ProductDetailScreen;