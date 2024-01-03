import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform, TouchableOpacity, Image } from 'react-native';

const Product = props => {
    /*const products = props.products;
    const title = props.title;*/

        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArticle(props.id)}>
              <View >
                <Image
                source={{
                  uri: props.bannerImg
               }}
                />
                <Text >{props.title}</Text>
                <Text >{props.categoryTitle}</Text>
                <Text >€ {props.price}</Text>
              </View>
            </TouchableOpacity >
        
          );
        
        }



export default Product;