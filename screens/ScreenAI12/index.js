import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UploadImageScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Upload Images</Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.imageWrapper}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageWrapper}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageWrapper}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.image} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upload Images</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    alignItems: 'center',
    marginBottom: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  imageWrapper: {
    width: '30%',
    height: 100,
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default UploadImageScreen;