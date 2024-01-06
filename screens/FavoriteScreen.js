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
    <View>
    <Text>My Favorites</Text>
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: item.productImage }} />
          <Text>{item.title}</Text>
          <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
            <Icon name="heart" size={25} color="red" />
          </TouchableOpacity>
        </View>
      )}
    />
  </View>
  );
};

const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
  });

export default FavoritesScreen;
