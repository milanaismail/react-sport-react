import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform, TouchableOpacity } from 'react-native';

import Product from '../components/Product';

const Products = (props) => {
    const [products, setProduct] = useState([]);
    const getProduct = async () => {
        try {
          //10.0.2.2:60628
          //http://craft-news-b.ddev.site
          let url;
          if (Platform.OS == 'ios') {
            //ddev describe om port number te weten te komen
            url = "http://10.0.2.2:61472/api/products/";
          }
          else {
            url = "https://sport.ddev.site/api/products"
          }
    
          const response = await fetch(url, {
            "method": "GET"
          });
          const json = await response.json();
          console.log(json.items);
          setProduct(json.items);
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
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
                        bannerImg={item.bannerImg}
                        categoryTitle={item.categoryTitle}
                        price={item.price}
                        onSelectArticle={props.onSelectArticle}
                    />
                    )}
            />  
        </View>
    );
}


 
export default Products;