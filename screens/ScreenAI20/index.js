import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const WalletScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Wallet</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Available Amount:</Text>
        <Text style={styles.balanceAmount}>$1000.00</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter withdrawal amount" keyboardType="numeric" value={amount} onChangeText={setAmount} />
      </View>
      <TouchableOpacity style={styles.withdrawButton}>
        <Text style={styles.buttonText}>Withdraw</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectBankButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI29");
      }}><Text style={styles.buttonText}>Select Bank Account</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.historyButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI28");
      }}><Text style={styles.buttonText}>History</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#4E9FDE',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  },
  inputContainer: {
    width: '80%',
    marginTop: 30
  },
  input: {
    borderWidth: 1,
    borderColor: '#4E9FDE',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40
  },
  withdrawButton: {
    backgroundColor: '#4E9FDE',
    borderRadius: 5,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  selectBankButton: {
    backgroundColor: '#4E9FDE',
    borderRadius: 5,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  historyButton: {
    backgroundColor: '#4E9FDE',
    borderRadius: 5,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default WalletScreen;