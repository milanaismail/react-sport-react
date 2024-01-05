import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const Filter = ({ onSortChange }) => {
  const [sortValue, setSortValue] = useState('0');

  const handleSortChange = (value) => {
    setSortValue(value);
    onSortChange(value);
  };

  return (
    <View style={styles.shopControlBar}>
        <View style={styles.pickerContainer}>
            <Text style={styles.label}>Sort by</Text>
            <Picker
                style={styles.picker}
                selectedValue={sortValue}
                onValueChange={(itemValue) => handleSortChange(itemValue)}
                >
                <Picker.Item label="Price: low to high" value="1" />
                <Picker.Item label="Price: high to low" value="2" />
            </Picker>
        </View>   
     </View>   
);
};

const styles = StyleSheet.create({
    shopControlBar: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        alignItems: 'flex-end',
        padding: 10,
        marginBottom: 8,
        
      },
    pickerContainer: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 50,
        width:'100%',
        backgroundColor: 'white',
        height: 40,
        padding: 6,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',

    },
    label: {
        color: '#333',
        fontSize: 16,
        marginLeft: 10,
        width: 100,
    },
    picker: {
        color: '#333',
        flex: 1,
      },
  });

export default Filter;