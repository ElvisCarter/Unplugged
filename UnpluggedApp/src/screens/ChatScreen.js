import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Input, Loading, Message } from '../components';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: Fetch messages from server
    setMessages([
      { id: 1, text: 'Hello, world!', user: 'Alice' },
      { id: 2, text: 'How are you doing?', user: 'Bob' },
      { id: 3, text: 'I am good, thanks!', user: 'Alice' },
      { id: 4, text: 'What about you?', user: 'Alice' },
      { id: 5, text: 'I am doing well too!', user: 'Bob' },
    ]);
  }, []);

  const handleSend = () => {
    // TODO: Send message to server
    const newMessage = {
      id: messages.length + 1,
      text: messageText,
      user: 'Alice',
    };
    setMessages([...messages, newMessage]);
    setMessageText('');
  };

  const renderMessage = ({ item }) => {
    return <Message text={item.text} user={item.user} />;
  };

  return (
    <View style={{ flex: 1 }}>
      {loading && <Loading />}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Input
          placeholder="Type a message"
          value={messageText}
          onChangeText={setMessageText}
          style={{ flex: 1 }}
        />
        <Button title="Send" onPress={handleSend} style={{ marginLeft: 10 }} />
      </View>
    </View>
  );
};

export default ChatScreen;
