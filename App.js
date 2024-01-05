import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, TouchableOpacity, View, Text, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

// Import your logo image
import LogoImage from './assets/logo.png';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Product" component={ProductScreen} />
        <Drawer.Screen name="About Us" component={HomeScreen} />
        <Drawer.Screen name="Contact" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  menuItem: {
    fontSize: 20,
    marginVertical: 10,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  searchShop: {
    flexDirection: 'row',
    alignItems: 'center',
  }

});


