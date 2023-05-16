import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const Screen = () => {
  const [bankName, setBankName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [iban, setIban] = useState('');
  const [swift, setSwift] = useState('');

  const handleSave = () => {// handle save functionality
  };

  const handleSelect = () => {// handle select functionality
  };

  const handleRemove = () => {// handle remove functionality
  };

  const handleAddAnother = () => {// handle add another functionality
  };

  return <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bank Name</Text>
        <TextInput style={styles.input} value={bankName} onChangeText={setBankName} placeholder="Enter Bank Name" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Account Name</Text>
        <TextInput style={styles.input} value={accountName} onChangeText={setAccountName} placeholder="Enter Account Name" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Account Number</Text>
        <TextInput style={styles.input} value={accountNumber} onChangeText={setAccountNumber} placeholder="Enter Account Number" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Routing Number</Text>
        <TextInput style={styles.input} value={routingNumber} onChangeText={setRoutingNumber} placeholder="Enter Routing Number" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>IBAN</Text>
        <TextInput style={styles.input} value={iban} onChangeText={setIban} placeholder="Enter IBAN" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>SWIFT</Text>
        <TextInput style={styles.input} value={swift} onChangeText={setSwift} placeholder="Enter SWIFT" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSelect}>
          <Text style={styles.buttonText}>Select</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRemove}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddAnother}>
          <Text style={styles.buttonText}>Add Another</Text>
        </TouchableOpacity>
      </View>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    width: '23%'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20
  }
});
export default Screen;