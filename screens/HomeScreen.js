import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Products')}
            >
                <Text style={styles.buttonText}>Shop Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
