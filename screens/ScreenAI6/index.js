import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {// handle login functionality
  };

  const handleForgotPassword = () => {// handle forgot password functionality
  };

  return <ImageBackground source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI10");
        }}><Text style={styles.buttonText}>Log In</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI7");
        }}><Text style={styles.forgotPassword}>Forgot Password?</Text></Pressable>
        </TouchableOpacity>
      </View>
    </ImageBackground>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  forgotPassword: {
    color: '#007AFF',
    marginTop: 10,
    textAlign: 'center'
  }
});
export default LoginScreen;