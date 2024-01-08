import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Platform } from 'react-native';
import Filter from '../components/Filter';
import Product from '../components/Product';

const ProductScreen = ({ route, navigation }) => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortValue, setSortValue] = useState('0');
  const categoryTitle = route.params?.categoryTitle; // 

    const getProduct = async () => {
        try {
          //10.0.2.2:60628
          //http://craft-news-b.ddev.site
          let url;
          if (Platform.OS == 'android') {
            //ddev describe om port number te weten te komen
            url = "http://10.0.2.2:64884/api/products/";
          }
          else {
            url = "http://sport.ddev.site/api/products/"
          }

          if (sortValue !== '0') {
            url += `?categoryTitle=${encodeURIComponent(categoryTitle)}`;
          }
    
          const response = await fetch(url, {
            method: "GET",
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const json = await response.json();

          const filteredProducts = categoryTitle
          ? json.items.filter(item => item.categoryTitle === categoryTitle)
          : json.items;
  

          setProducts(filteredProducts);
          setSortedProducts(filteredProducts);
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
      }, [sortValue, categoryTitle]); 

    return (  
      <View style={styles.container}>         
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
                      category={item.categoryTitle}
                      productDetail={item.productDetail}
                      onPress={() =>
                        navigation.navigate('ProductDetailScreen', {
                          id: item.id,
                          title: item.title,
                          productImage: item.productImage,
                          price: item.price,
                          category: item.categoryTitle,
                          productDetail: item.productDetail,
                        })
                      }
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
    height: '100%',
  },

});


 
export default ProductScreen;