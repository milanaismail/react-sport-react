import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform } from 'react-native';
import Filter from '../components/Filter';
import Product from '../components/Product';

const ProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortValue, setSortValue] = useState('0');

    const getProduct = async () => {
        try {
          //10.0.2.2:60628
          //http://craft-news-b.ddev.site
          let url;
          if (Platform.OS == 'android') {
            //ddev describe om port number te weten te komen
            url = "http://10.0.2.2:55001/api/products/";
          }
          else {
            url = "http://sport.ddev.site/api/products/"
          }
    
          const response = await fetch(url, {
            method: "GET",
            timeout: 10000, // 10 seconds
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const json = await response.json();
          setProducts(json.items);
          setSortedProducts(json.items);
        } catch (error) {
          console.error('Error fetching products:', error);

        }
      }

      const handleSortChange = (value) => {
        setSortValue(value);
    
        switch (value) {
          case '1':
            sortProductsByPriceLowToHigh();
            break;
          case '2':
            sortProductsByPriceHighToLow();
            break;
          default:
            // Default: Do nothing or reset to original order
            setSortedProducts(products);
            break;
        }
      };

      const sortProductsByPriceLowToHigh = () => {
        const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);
      };
    
      const sortProductsByPriceHighToLow = () => {
        const sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
      };

      useEffect(() => {
        getProduct();
      }, []);

    return (  
      <View style={styles.container}>
          <Text style={styles.shopTitle}>All Products</Text>
            <Filter onSortChange={handleSortChange} />
            <FlatList
                data={sortedProducts}
                keyExtractor={item => item.id}
                numColumns={2} // Set numColumns to 2 for a two-column layout
                renderItem={({ item }) => {
                  if (Platform.OS == 'android') {
                    item.productImage = item.productImage.replace('sport.ddev.site', '10.0.2.2:55001');
                  }
                    return <Product
                      id={item.id}
                      title={item.title}
                      productImage={item.productImage}
                      price={item.price}
                      navigation={navigation}
                      />
                    }}
                  />
                </View >
              );
            }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  shopTitle: {
    fontSize: 30,
    fontWeight: 'bold', 
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 24,
  }
});


 
export default ProductScreen;