import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [selectedAccountType, setSelectedAccountType] = useState('');

  const handleAccountTypeSelection = accountType => {
    setSelectedAccountType(accountType);
  };

  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.logo} />
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>Select Account Type</Text>
      <TouchableOpacity style={[styles.accountTypeButton, selectedAccountType === 'personal' && styles.selectedAccountTypeButton]} onPress={() => handleAccountTypeSelection('personal')}>
        <Text style={styles.accountTypeButtonText}>Personal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.accountTypeButton, selectedAccountType === 'business' && styles.selectedAccountTypeButton]} onPress={() => handleAccountTypeSelection('business')}>
        <Text style={styles.accountTypeButtonText}>Business</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI9");
      }}><Text style={styles.createAccountButtonText}>Create Account</Text></Pressable>
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  accountTypeButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  selectedAccountTypeButton: {
    backgroundColor: '#000'
  },
  accountTypeButtonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  createAccountButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  createAccountButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default CreateAccountScreen;