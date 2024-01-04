import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Product = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.productContainer}>
        <Image
          source={{
            uri: props.productImage,
          }}
          style={styles.productImage}
          />
          <Text style={styles.productTitle}>{props.title}</Text>
          <Text style={styles.productPrice}>€ {props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1, 
    borderWidth: 1, // Add border width
    borderColor: '#ddd', // Border color
    borderRadius: 8, // Optional: Add border radius for rounded corners
    padding: 10, // Optional: Add padding for space around the product
    marginBottom: 10, // Optional: Add margin bottom for space between products
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
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