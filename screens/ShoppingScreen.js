import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ShoppingScreen = () => {
  const [shopping, setShopping] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    const calculateSubtotal = () => {
      const total = shopping.reduce((acc, item) => acc + item.price, 0);
      setSubtotal(total);
    };
  
    calculateSubtotal();
  }, [shopping]);

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

      const handleQuantityChange = (itemId, action) => {
        const updatedShopping = shopping.map((item) => {
          if (item.id === itemId) {
            let newQuantity = quantity[itemId] || 1;
      
            if (action === 'increase') {
              newQuantity += 1;
            } else if (action === 'decrease' && newQuantity > 1) {
              newQuantity -= 1;
            }
      
            setQuantity((prevQuantity) => ({
              ...prevQuantity,
              [itemId]: newQuantity,
            }));
      
            return { ...item, quantity: newQuantity };
          }
      
          return item;
        });
      
        setShopping(updatedShopping);
        AsyncStorage.setItem('shopping', JSON.stringify(updatedShopping));
      };
    
  return (
      <View style={styles.container}>
            <View style={styles.favHeader}>
                <Text style={styles.headerText}>Product</Text>
                <Text style={styles.headerText}>Total</Text>
            </View>
                <FlatList
                data={shopping}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                        <View style={styles.favContainer}>
                            <View style={styles.itemContainer}>
                            <Image style={{ width: 70, height: 70 }} source={{ uri: item.productImage }} />
                            <View style={styles.itemSubContainer}>
                            <Text style={styles.productTitle}
                            >{item.title}</Text>
                            <Text style={styles.otherText}>Color: Red</Text>
                            <Text style={styles.otherText}>Size: M</Text>
                                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                                    <View style={styles.quantityLabel}>
                                    <TouchableOpacity onPress={() => handleQuantityChange(item.id, 'decrease')}>
                                        <Text style={styles.quantity}>-</Text>
                                      </TouchableOpacity>
                                      <Text style={styles.quantity}>{quantity[item.id] || 1}</Text>
                                      <TouchableOpacity onPress={() => handleQuantityChange(item.id, 'increase')}>
                                        <Text style={styles.quantity}>+</Text>
                                      </TouchableOpacity>
                                    </View>                       
                                            <TouchableOpacity onPress={() => removeFromShopping(item.id)}>
                                            <Icon name="trash" size={20} color="blue" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                <Text> € {item.price}</Text>
                                </View>
                        </View>
                )}
                />
                <Text style={styles.headerText}>Discounts</Text>
                <View style={styles.discountContainer}>
                    <View style={styles.discountBox}></View>
                    <TouchableOpacity style={styles.discountButton}>
                      <Text style={styles.discountText}>Apply</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.checkout}>
                <Text style={styles.headerText}>Subtotal: € {subtotal.toFixed(2)}</Text>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
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
    itemSubContainer: {
        marginLeft: 10,
        flexShrink: 1,
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
    favContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      padding: 10,
      borderColor: '#ddd', 
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
    quantityLabel: {
      flexDirection: 'row',
      marginRight: 20,
      },
      quantity: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 12,
      },
      otherText: {
        marginBottom: 5, 
      },
    checkout: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 20,
      },
    button: {
        backgroundColor: '#b3d1ff',
        width: 300,
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 30,
    },
    discountBox: {
        width: 280,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    discountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
        width: '100%',
    },
    discountButton:{
        backgroundColor: '#000',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    discountText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
  });

export default ShoppingScreen;
