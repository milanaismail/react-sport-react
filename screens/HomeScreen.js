import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground 
        source={require('../assets/hockey-banner.png')}
        style={{width: '100%', height: '100%'}}
        >
        <View style={styles.container}>
            <Text 
            style={styles.title}>
            Quality Hockey Gear for Champions</Text>
            <Text
            style={styles.bodyText}>
            Explore our collection and elevate your game to the next level.</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Products')}
                >
                <Text style={styles.buttonText}>Shop Now</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 22,
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    bodyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        marginBottom: 20,

        
    },
    button: {
        backgroundColor: '#b3d1ff',
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 6,
    },
    buttonText: {
        fontSize: 20,
    },
});

export default HomeScreen;
