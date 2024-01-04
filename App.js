import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, TouchableOpacity, View, Text, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

// Import your logo image
import LogoImage from './assets/favicon.png';

const Stack = createNativeStackNavigator();

const CustomHeader = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const navigateToScreen = (screenName) => {
    toggleMenu();
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* Hamburger menu icon */}
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={toggleMenu}>
        <Icon name="bars" size={30} color="#000" />
      </TouchableOpacity>

      {/* Logo */}
      <Image source={LogoImage} style={{ width: 100, height: 40, marginLeft: 10 }} />

      {/* Search icon */}
      <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 10 }}>
        <Icon name="search" size={20} color="#000" />
      </TouchableOpacity>

      {/* Bag icon */}
      <TouchableOpacity>
        <Icon name="shopping-bag" size={20} color="#000" style={{ marginRight: 10 }} />
      </TouchableOpacity>

      {/* Custom Menu */}
      <Modal visible={isMenuVisible} transparent={true} animationType="slide">
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={toggleMenu}>
            <Icon name="times" size={30} color="#000" style={styles.closeIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('HomeScreen')}>
            <Text style={styles.menuItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Product')}>
            <Text style={styles.menuItem}>Products</Text>
          </TouchableOpacity>
          {/* Add other menu items here */}
        </View>
      </Modal>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: ({ navigation }) => <CustomHeader navigation={navigation} />,
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
});


export default App;
