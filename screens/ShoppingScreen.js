import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ShoppingScreen = () => {
  const [shopping, setShopping] = useState([]);

  useEffect(() => {
    const fetchShopping = async () => {
        try {
          const storedShopping = await AsyncStorage.getItem('shopping');
          console.log('Fetched Shopping:', storedShopping);

          if (storedShopping) {
            setShopping(JSON.parse(storedShopping));
          }
        } catch (error) {
          console.error('Error fetching Shopping:', error);
        }
      };
    
      fetchShopping();
    }, []);

    const removeFromShopping = async (itemId) => {
        try {
          const updatedShopping = shopping.filter((fav) => fav.id !== itemId);
          setShopping(updatedShopping);
          await AsyncStorage.setItem('shopping', JSON.stringify(updatedShopping));
        } catch (error) {
          console.error('Error removing from shopping:', error);
        }
      };
    
  return (
    <View style={styles.container}>
        <FlatList
        data={shopping}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.favContainer}>
                <View style={styles.itemContainer}>
                    <Image style={{ width: 70, height: 70 }} source={{ uri: item.productImage }} />
                    <Text style={styles.productTitle}
                    >{item.title}</Text>
                    <TouchableOpacity onPress={() => removeFromShopping(item.id)}>
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

export default ShoppingScreen;
