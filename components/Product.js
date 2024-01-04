import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Product = (props) => {
  console.log('Product Image URL:', props.productImage);

  return (
    <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.productContainer}>
          <Image
            style={styles.productImage}
            source={{
              uri: props.productImage,
            }}
            onError={(error) => console.error('Image load error:', error.nativeEvent)}
            />
            <Text style={styles.productTitle}>{props.title}</Text>
            <Text style={styles.productPrice}>€ {props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1, // Add border width
    borderColor: '#ddd', // Border color
    borderRadius: 8, // Optional: Add border radius for rounded corners
    padding: 10, // Optional: Add padding for space around the product
    margin: 6, // Optional: Add margin bottom for space between products
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  productImage: {
    height: 150,
    
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    width: 155,
    height: 90,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});


export default Product;