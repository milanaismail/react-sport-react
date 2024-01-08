import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { Image, TouchableOpacity, View, Text, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import ShoppingScreen from './screens/ShoppingScreen';

import LogoImage from './assets/logo.png';
import bag from './assets/market.png';


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
      headerShown: route.name === 'ProductScreen' ? false : true, 
    })}
    >
    <Stack.Screen name="ProductScreen" component={ProductScreen} />
    <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
  </Stack.Navigator>
);


export default function App(){
  return (
      <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerLabelStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
      >
      <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Image
                source={LogoImage}
                style={{ width: 90, height: 40, resizeMode: 'contain' }}
              />            
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 16 }}>
                <TouchableOpacity onPress={() => navigation.navigate('My Favorites')}>
                  <Icon name="heart-o" size={25} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('My Shopping Cart')}>
                  <Image source={bag} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Drawer.Screen
          name="Products"
          component={ProductStack}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,0.1)',
            },
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: 'bold', width: '100%' }}>All Products</Text>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 16 }}>
                <TouchableOpacity onPress={() => navigation.navigate('My Favorites')}>
                  <Icon name="heart-o" size={25} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('My Shopping Cart')}>
                  <Image source={bag} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Drawer.Screen
          name="Skates"
          component={ProductScreen}
          initialParams={{ categoryTitle: 'Ice Hockey Skates' }} 
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,0.1)',
            },
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: 'bold', width: '100%' }}>Skates</Text>
            ),
            drawerLabelStyle: {
              fontSize: 16, 
            },
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 16 }}>
                <TouchableOpacity onPress={() => navigation.navigate('My Favorites')}>
                  <Icon name="heart-o" size={25} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('My Shopping Cart')}>
                  <Image source={bag} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
              </View>
            ),
          })}

        />
        <Drawer.Screen
          name="Sticks"
          component={ProductScreen}
          initialParams={{ categoryTitle: 'Ice Hockey Sticks' }} 
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,0.1)',
            },
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: 'bold', width: '100%' }}>Sticks</Text>
              ),
              drawerLabelStyle: {
                fontSize: 16, 
              },
              headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 16 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('My Favorites')}>
                    <Icon name="heart-o" size={25} color="black" style={{ marginRight: 15 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('My Shopping Cart')}>
                    <Image source={bag} style={{ width: 25, height: 25 }} />
                  </TouchableOpacity>
                </View>
              ),
            })}
          />
        <Drawer.Screen
          name="Helmets"
          component={ProductScreen}
          initialParams={{ categoryTitle: 'Ice Hockey Helmets' }} 
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,0.1)',
            },
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: 'bold', width: '100%' }}>Helmets</Text>
            ),
            drawerLabelStyle: {
              fontSize: 16, 
            },
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 16 }}>
                <TouchableOpacity onPress={() => navigation.navigate('My Favorites')}>
                  <Icon name="heart-o" size={25} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('My Shopping Cart')}>
                  <Image source={bag} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />   
        <Drawer.Screen
          name="About Us"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Image
                source={LogoImage}
                style={{ width: 90, height: 40, resizeMode: 'contain' }}
              />
            ),
          }}
        />               
        <Drawer.Screen
          name="Contact"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Image
                source={LogoImage}
                style={{ width: 90, height: 40, resizeMode: 'contain' }}
              />
            ),
          }}
        />           
        <Drawer.Screen
          name="My Favorites"
          component={FavoriteScreen} 
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,0.1)',
            },
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: 'bold', width: '100%' }}>My Favorites</Text>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 16 }}>
                <TouchableOpacity onPress={() => navigation.navigate('My Shopping Cart')}>
                  <Image source={bag} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />    
          <Drawer.Screen
          name="My Shopping Cart"
          component={ShoppingScreen} 
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: 'rgba(0,0,0,0.1)',
            },
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: 'bold', width: '100%' }}>Shopping cart</Text>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 16 }}>
                <TouchableOpacity onPress={() => navigation.navigate('My Favorites')}>
                <Icon name="heart-o" size={25} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
              </View>
            ),
          })}
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
 

});


