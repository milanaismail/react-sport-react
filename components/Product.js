import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Product = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View>
        <Image
          source={{
            uri: props.productImage,
          }}
          style={{ width: 100, height: 100 }} // Set the desired width and height
        />
        <Text>{props.title}</Text>
        <Text>€ {props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;