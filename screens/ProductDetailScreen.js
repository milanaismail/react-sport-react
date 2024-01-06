import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const ProductDetailScreen = ({ route }) => {
  const { id, title, productImage, price, category } = route.params;

 const colors = [
    { label: 'Red', value: '#FF5733' },
    { label: 'Green', value: '#33FF57' },
    { label: 'Blue', value: '#5733FF' },
    { label: 'Yellow', value: '#FFFF33' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.productCategory}>Home / {category}</Text>
        <Icon name="heart-o" size={25} color={'red'} style={styles.heartIcon} />
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
    

});

export default ProductDetailScreen;