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
    <View style={styles.pickerContainer}>
    <Text style={styles.label}>Sort by</Text>
    <Picker
      selectedValue={sortValue}
      style={styles.picker}
      onValueChange={(itemValue) => handleSortChange(itemValue)}
    >
      <Picker.Item label="Price: low to high" value="1" />
      <Picker.Item label="Price: high to low" value="2" />
    </Picker>
  </View>
);
};

const styles = StyleSheet.create({
    pickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#888',
      borderRadius: 5,
      overflow: 'hidden',
    },
    label: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    picker: {
      height: 50,
      width: 200,
    },
  });

export default Filter;