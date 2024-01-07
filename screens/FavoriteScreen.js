// FavoritesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

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
        <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.favContainer}>
                <View style={styles.itemContainer}>
                    <Image style={{ width: 70, height: 70 }} source={{ uri: item.productImage }} />
                    <Text style={styles.productTitle}
                    >{item.title}</Text>
                    <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
                    <Icon name="minus-circle" size={25} color="blue" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
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
      marginBottom: 30,
      borderWidth: 1,
      padding: 10,
      borderColor: '#ddd', 
      borderRadius: 8, 
    
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
        },

    productTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      width: 200,
    },
    button: {
        backgroundColor: '#b3d1ff',
        width: 300,
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
    },
  });

export default FavoritesScreen;
