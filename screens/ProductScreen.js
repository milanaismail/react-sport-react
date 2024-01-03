import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform } from 'react-native';

import Product from '../components/Product';

const Products = ({ navigation }) => {
    const [products, setProduct] = useState([]);

    const getProduct = async () => {
        try {
          //10.0.2.2:60628
          //http://craft-news-b.ddev.site
          let url;
          if (Platform.OS == 'android') {
            //ddev describe om port number te weten te komen
            url = "http://10.0.2.2:55017/api/products/";
          }
          else {
            url = "https://sport.ddev.site/api/products"
          }
    
          const response = await fetch(url, {
            method: "GET",
            timeout: 10000, // 10 seconds
          });


          const json = await response.json();
          console.log('Response status:', response.status);
          setProduct(json.items);
        } catch (error) {
          console.error('Error:', error);
        }
      }

      useEffect(() => {
        console.log('useEffect is running');
        getProduct();
      }, []);

    return (  
        <View>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <Product
                  id={item.id}
                  title={item.title}
                  productImage={item.productImage}
                  price={item.price}
                  navigation={navigation}
                  />
                  )}
                  />  
        </View>
    );
}


 
export default Products;