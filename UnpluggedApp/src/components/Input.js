import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
});

export default Input;
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ backgroundColor: 'blue', padding: 10 }, style]}>
      <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ placeholder, value, onChangeText, keyboardType, autoCapitalize, secureTextEntry, style }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      style={[
        { borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 5 },
        style,
      ]}
    />
  );
};

export default Input;
