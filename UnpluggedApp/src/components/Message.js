import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ message, isOwnMessage }) => {
  return (
    <View style={[styles.container, isOwnMessage ? styles.ownMessage : null]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  ownMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default Message;

import React from 'react';
import { View, Text } from 'react-native';

const Message = ({ text, user }) => {
  return (
    <View style={{ backgroundColor: 'lightgray', padding: 10, borderRadius: 5, marginBottom: 10 }}>
      <Text style={{ fontWeight: 'bold' }}>{user}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default Message;
