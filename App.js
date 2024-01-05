import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, TouchableOpacity, View, Text, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SkatesScreen from './screens/SkatesScreen';

// Import your logo image
import LogoImage from './assets/logo.png';


const Drawer = createDrawerNavigator();


export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerLabel: 'Home',
            drawerLabelStyle: { fontSize: 18 }, 
          }}
        />           
        <Drawer.Screen
          name="Products"
          component={ProductScreen}
          options={{
            drawerLabel: 'Products',
            drawerLabelStyle: { fontSize: 18 }, 
          }}
        />                
        <Drawer.Screen
          name="Skates"
          component={SkatesScreen}
          options={{
            drawerLabel: 'Skates',
            drawerLabelStyle: { fontSize: 12 },
          }}
        />        
        <Drawer.Screen
          name="Sticks"
          component={ProductScreen}
          options={{
            drawerLabel: 'Sticks',
            drawerLabelStyle: { fontSize: 12 }, 
          }}
        />
        <Drawer.Screen
          name="Helmets"
          component={ProductScreen}
          options={{
            drawerLabel: 'Helmets',
            drawerLabelStyle: { fontSize: 12 }, 
          }}
        />        
        <Drawer.Screen
          name="About Us"
          component={HomeScreen}
          options={{
            drawerLabel: 'About Us',
            drawerLabelStyle: { fontSize: 18 }, 
          }}
        />                   
        <Drawer.Screen
          name="Contact"
          component={HomeScreen}
          options={{
            drawerLabel: 'Contact',
            drawerLabelStyle: { fontSize: 18 }, // Customize the font size here
          }}
        />                 
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


