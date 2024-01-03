import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Product"
                onPress={() => navigation.navigate('Product')}
            />
        </View>
    );
};

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
