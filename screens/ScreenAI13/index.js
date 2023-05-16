import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const UploadDocumentsScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = file => {
    setSelectedFile(file);
  };

  const handleSubmit = () => {// handle submit logic
  };

  const handleNext = () => {// handle next logic
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Upload Documents</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileSelect()}>
        <Text style={styles.uploadButtonText}>Select File</Text>
      </TouchableOpacity>
      {selectedFile && <View style={styles.selectedFileContainer}>
          <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.selectedFileImage} />
          <Text style={styles.selectedFileName}>{selectedFile.name}</Text>
        </View>}
      <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={() => handleNext()}>
        <Text style={styles.nextButtonText}>Next</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  uploadButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  selectedFileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  selectedFileImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  selectedFileName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  submitButton: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  nextButton: {
    backgroundColor: '#FF9500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default UploadDocumentsScreen;