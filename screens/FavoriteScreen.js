import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const [isShopping, setIsShopping] = useState(false);
  const [shopping, setShopping] = useState([]);

  const addToCart = async (id, title, productImage, price, category) => {
    try {
      const storedShopping = await AsyncStorage.getItem('shopping');
      const currentShopping = storedShopping ? JSON.parse(storedShopping) : [];
  
      const isProductInCart = currentShopping.some((item) => item.id === id);
      const newIsShopping = !isProductInCart;
  
      let newShopping;
  
      if (newIsShopping) {
        newShopping = [...currentShopping, { id, title, productImage, price, category }];
      } else {
        newShopping = currentShopping.filter((item) => item.id !== id);
      }
  
      await AsyncStorage.setItem('shopping', JSON.stringify(newShopping));
      setShopping(newShopping);
      setIsShopping(newIsShopping);
    } catch (error) {
      console.error('Error updating shopping cart:', error);
    }
  };

  useEffect(() => {
    const fetchFavorites = async () => {
        try {
          const storedFavorites = await AsyncStorage.getItem('favorites');
          console.log('Fetched favorites:', storedFavorites);

          if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
          }
        } catch (error) {
          console.error('Error fetching favorites:', error);
        }
      };
    
      fetchFavorites();
    }, []);

    const removeFromFavorites = async (itemId) => {
        try {
          const updatedFavorites = favorites.filter((fav) => fav.id !== itemId);
          setFavorites(updatedFavorites);
          await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } catch (error) {
          console.error('Error removing from favorites:', error);
        }
      };
    
  return (
    <View style={styles.container}>
       <View style={styles.favHeader}>
                <Text style={styles.headerText}>Product</Text>
                <Text style={styles.headerText}>Total</Text>
            </View>
        <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.favContainer}>
                <View style={styles.itemContainer}>
                    <Image style={{ width: 70, height: 70 }} source={{ uri: item.productImage }} />
                    <View>
                        <Text style={styles.productTitle}
                        >{item.title}</Text>
                        <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
                            <Icon name="trash" size={25} color="blue" />
                        </TouchableOpacity>
                    </View>
                      <Text>€ {item.price}</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => addToCart(item.id, item.title, item.productImage, item.price, item.category)}
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    favContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      padding: 10,
      borderColor: '#ddd', 
    },
    favHeader: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderColor: '#ddd', 
      borderBottomWidth: 1,
    },
    headerText: {
      fontSize: 16,
      fontWeight: '600',
      marginTop: 12,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },

    productTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      width: 180,
      marginBottom: 5,
    },
    button: {
      backgroundColor: '#b3d1ff',
      width: 300,
      paddingVertical: 15,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 30,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default FavoritesScreen;
