import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const TruckDriverDrugTestScreen = () => {
  const [testType, setTestType] = useState('');

  const handleUpload = () => {// Upload document logic
  };

  const handleSubmit = () => {// Submit document logic
  };

  return <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Upload Drug Test Results</Text>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.documentPlaceholder} />
      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.buttonText}>Upload Document</Text>
      </TouchableOpacity>
      <View style={styles.radioButtonsContainer}>
        <TouchableOpacity style={styles.radioButton} onPress={() => setTestType('random')}>
          <Text style={styles.radioButtonText}>
            {testType === 'random' ? '●' : '○'} Random Test
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton} onPress={() => setTestType('post-accident')}>
          <Text style={styles.radioButtonText}>
            {testType === 'post-accident' ? '●' : '○'} Post-Accident Test
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  documentPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#E0E0E0',
    marginBottom: 20
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  submitButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioButtonText: {
    fontSize: 18,
    marginLeft: 5
  }
});
export default TruckDriverDrugTestScreen;