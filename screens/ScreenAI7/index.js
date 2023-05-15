import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleResetPassword = () => {// handle reset password logic
  };

  const handleCancel = () => {// handle cancel logic
  };

  return <View style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Reset Password</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="New Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
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
    marginBottom: 30
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  cancelButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ResetPasswordScreen;