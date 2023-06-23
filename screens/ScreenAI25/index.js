import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Image } from 'react-native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isEnglish, setIsEnglish] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  return <View style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Drug tests screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Manage payments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Manage bank account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI5");
      }}><Text style={styles.buttonText}>Privacy policy</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI4");
      }}><Text style={styles.buttonText}>Terms and Conditions</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI26");
      }}><Text style={styles.buttonText}>Change password</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Support/ Send Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>English/ Spanish</Text>
        <Switch value={isEnglish} onValueChange={() => setIsEnglish(!isEnglish)} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={() => setNotificationsEnabled(!notificationsEnabled)} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  switchText: {
    marginRight: 10,
    fontSize: 16
  }
});
export default SettingsScreen;