import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetailScreen = ({ route }) => {
  const { id, title, productImage, price, category } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]); // Add this line to define the favorites state
  
  const navigation = useNavigation();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));

          // Set the initial isFavorite state based on whether the current product is favorited
          setIsFavorite(JSON.parse(storedFavorites).some((fav) => fav.id === id));
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [id]);

  const toggleFavorite = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      const currentFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  
      const isProductFavorited = currentFavorites.some((fav) => fav.id === id);
      const newIsFavorite = !isProductFavorited;
  
      let newFavorites;
  
      if (newIsFavorite) {
        newFavorites = [...currentFavorites, { id, title, productImage, price, category }];
      } else {
        newFavorites = currentFavorites.filter((fav) => fav.id !== id);
      }
  
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorites(newFavorites); // Update the state immediately
      setIsFavorite(newIsFavorite);
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };

 const colors = [
    { label: 'Red', value: '#FF5733' },
    { label: 'Green', value: '#33FF57' },
    { label: 'Blue', value: '#5733FF' },
    { label: 'Yellow', value: '#FFFF33' },
  ];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: `/ ${category}`,
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10, marginRight: 10  }}
          onPress={() => {
            navigation.navigate('ProductScreen'); // Navigate to your Products screen
          }}
        >
          <Text style={{ fontSize: 18, color: 'blue' }}>Products</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, category]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.productCategory}>Products / {category}</Text>
        <TouchableOpacity onPress={toggleFavorite}>
           <Icon name={isFavorite ? 'heart' : 'heart-o'} size={25} color={isFavorite ? 'red' : 'red'} style={styles.heartIcon} />
        </TouchableOpacity>  
        <Image style={styles.productImage} source={{ uri: productImage }} />
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>€ {price}</Text>
            <View style={styles.productSubWrapper}>
                <Text style={styles.sizeTitle}>Color</Text>
                <View style={styles.colorContainer}>
                    {colors.map((color, index) => (
                    <View key={index} style={styles.colorItem}>
                        <View style={[styles.colorCircle, { backgroundColor: color.value }]} />
                        <Text style={styles.colorLabel}>{color.label}</Text>
                    </View>
                    ))}
                </View>
                <Text style={styles.sizeTitle}>Size</Text>
                <View style={styles.sizeLabel}>
                    <TouchableOpacity>
                        <Text style={styles.size}>S-M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.size}>M-L</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.quantityTitle}>Quantity</Text>
                <View style={styles.quantityLabel}>
                    <TouchableOpacity>
                        <Text style={styles.quantity}>-</Text>
                    </TouchableOpacity>
                        <Text style={styles.quantity}>1</Text>
                    <TouchableOpacity>
                        <Text style={styles.quantity}>+</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.productOverview}>
                <Text style={styles.productOverviewTitle}>Product Overview</Text>

                <Text style={styles.overviewText}>The HYPERLITE 2 HELMET is the most advanced helmet we’ve ever built. Engineered for the elite and pro-inspired player who doesn’t want to compromise on comfort, protection, or performance, the HYPERLITE 2 HELMET offers an optimum level of performance in a state-of-the-art package.</Text>

                <Text style={styles.subTitle}>KEY FEATURES:</Text>
                
                <Text style={styles.listTitle}>• GX-POD </Text>
                <Text style={styles.overviewText}>- Experience premium comfort & ventilation with a revolutionary 3D printed structure built to manage low, mid, and high-energy impacts.</Text>

                <Text style={styles.listTitle}>• Occipital Lock </Text>
                <Text style={styles.overviewText}>- Stay dialed-in to the moment with the Occipital Lock + FreeForm Adjustment system allowing for easy, independent length and width adjustments.</Text>

                <Text style={styles.listTitle}>• Elite Ventilation </Text>
                <Text style={styles.overviewText}> - Feel the improved air flow from strategically placed exterior vents that match the GX-POD integration.</Text>

                <Text style={styles.listTitle}>• FreeForm Adjustment System </Text>
                <Text style={styles.overviewText}> – Independent length and width adjustments allow you to create a customized fit.</Text>
            </View>

        </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    backgroundColor:'#fff',
    },
    productCategory: {
    fontSize: 20,
    backgroundColor: '#b3d1ff',
    color: 'black',
    width: '100%',
    paddingVertical: 20,
    paddingLeft: 20,
    marginBottom: 20,

    },
    productImage: {
    width: 400,
    height: 400,
    marginBottom: 10,
    },
    productTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    },
    productPrice: {
    fontSize: 18,
    marginBottom: 20,
    },
    heartIcon: {
    marginLeft: 300,
    },
    productSubWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#F2F2F2',
    paddingVertical: 20,
    marginVertical: 20,
    },
    sizeLabel: {
    flexDirection: 'row',
    width: 300,
    },
    size: {
    fontSize: 18,
    marginRight: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    backgroundColor: '#fff',
    },
    sizeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    colorContainer: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', 
    marginBottom: 20,
    },
    colorCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    },
    colorItem: {
    alignItems: 'center',
    marginBottom: 10,
    },
    colorLabel: {
    fontSize: 14,
    marginTop: 5,
    },
    quantityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    quantityLabel: {
    flexDirection: 'row',
    width: 300,
    },
    quantity: {
    fontSize: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    backgroundColor: '#fff',
    },
    button: {
    backgroundColor: '#b3d1ff',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    },
    buttonText: {
    fontSize: 16,
    },
    productOverview: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 50,
    borderTopWidth: 1,
    borderTopColor: 'black', 
    },
    productOverviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    },
    overviewText: {
    fontSize: 16,
    },
    subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    },
    listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    },
    listText: {
    fontSize: 16,
    },


});

export default ProductDetailScreen;