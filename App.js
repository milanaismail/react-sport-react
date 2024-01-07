import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { Image, TouchableOpacity, View, Text, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';


// Import your logo image
import LogoImage from './assets/logo.png';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ProductStack = () => (
  <Stack.Navigator
    initialRouteName="ProductScreen"
    screenOptions={({ route }) => ({
      headerStyle: {
        backgroundColor: '#b3d1ff',
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '300',
      },
      headerShown: route.name === 'ProductScreen' ? false : true, // Hide the header for ProductScreen
    })}
    >
    <Stack.Screen name="ProductScreen" component={ProductScreen} />
    <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
  </Stack.Navigator>
);


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
      <Drawer.Screen name="Products" component={ProductStack} />        
        <Drawer.Screen
          name="Skates"
          component={ProductScreen}
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
            drawerLabelStyle: { fontSize: 18 }, 
          }}
        />            
        <Drawer.Screen
          name="My favorites"
          component={FavoriteScreen} 
          options={{ drawerLabel: 'Favorite Screen', drawerLabelStyle: { fontSize: 18 } }}
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


