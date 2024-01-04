import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

// Import your logo image
import LogoImage from './assets/favicon.png';

const Stack = createNativeStackNavigator();

const CustomHeader = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* Hamburger menu icon */}
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => navigation.toggleDrawer()}
      >
        <Icon name="bars" size={30} color="#000" />
      </TouchableOpacity>

      {/* Logo */}
      <Image source={LogoImage} style={{ width: 100, height: 40, marginLeft: 10 }} />

      {/* Search icon */}
      <TouchableOpacity
        style={{ marginLeft: 'auto', marginRight: 10 }}
        onPress={() => {
          // Add your search logic here
        }}
      >
        <Icon name="search" size={20} color="#000" />
      </TouchableOpacity>

      {/* Bag icon */}
      <TouchableOpacity
        onPress={() => {
          // Add your bag logic here
        }}
      >
        <Icon name="shopping-bag" size={20} color="#000" style={{ marginRight: 10 }} />
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <CustomHeader />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#b3d1ff',
          },
          headerTintColor: '#000',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
