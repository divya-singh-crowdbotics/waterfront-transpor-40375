import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const DirectMessagingScreen = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log(message);
    setMessage('');
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.avatar} />
        <Text style={styles.username}>John Doe</Text>
      </View>
      <View style={styles.messagesContainer}>
        <Text style={styles.message}>Hey, how are you?</Text>
        <Text style={[styles.message, styles.sentMessage]}>I'm good, thanks for asking!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type your message here" value={message} onChangeText={setMessage} />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 20
  },
  message: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%'
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007aff',
    color: '#fff'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
    marginRight: 10
  },
  sendButton: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default DirectMessagingScreen;