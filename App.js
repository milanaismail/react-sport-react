import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, TouchableOpacity, View, Text, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

// Import your logo image
import LogoImage from './assets/logo.png';

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
    <View style={styles.nav}>
      <TouchableOpacity onPress={toggleMenu}>
        <Icon name="bars" size={30} color="#000" />
      </TouchableOpacity>

      <Image source={LogoImage} style={{ width: 100, height: 40, }} resizeMode="contain"/>

      <View style={styles.searchShop}> 
      <TouchableOpacity style={{ marginRight: 10 }}>
        <Icon name="search" size={20} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="shopping-bag" size={20} color="#000" />
      </TouchableOpacity>
      </View>

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


export default App;
