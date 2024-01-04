import React, { useState } from 'react';
import { View, Picker } from 'react-native';

const Filter = ({ onSortChange }) => {
  const [sortValue, setSortValue] = useState('0');

  const handleSortChange = (value) => {
    setSortValue(value);
    onSortChange(value);
  };

  return (
    <View>
      <Picker
        selectedValue={sortValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue) => handleSortChange(itemValue)}
      >
        <Picker.Item label="Sort by" value="0" />
        <Picker.Item label="Price: low to high" value="1" />
        <Picker.Item label="Price: high to low" value="2" />
      </Picker>
    </View>
  );
};

export default Filter;