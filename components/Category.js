// CategoryFilter.js
import React from 'react';
import { View, Picker } from 'react-native';

const CategoryFilter = ({ onCategoryChange }) => {
  return (
    <View>
      <Picker onValueChange={onCategoryChange}>
        
      </Picker>
    </View>
  );
}

export default CategoryFilter;
