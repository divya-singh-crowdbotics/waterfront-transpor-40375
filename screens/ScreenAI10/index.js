import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TwoFactorAuthScreen = () => {
  const [token, setToken] = useState('');

  const handleTokenChange = text => {
    setToken(text);
  };

  const handleVerifyToken = () => {// handle verification logic here
  };

  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.logo} />
      <Text style={styles.title}>Enter 2FA Token</Text>
      <TextInput style={styles.input} placeholder="Token" onChangeText={handleTokenChange} value={token} keyboardType="numeric" />
      <TouchableOpacity style={styles.button} onPress={handleVerifyToken}>
        <Text style={styles.buttonText}>Verify Token</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default TwoFactorAuthScreen;