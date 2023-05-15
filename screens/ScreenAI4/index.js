import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const TermsAndConditionsScreen = () => {
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Terms and Conditions</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Acceptance of Terms</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Changes to Terms</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Termination</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Governing Law</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20
  }
});
export default TermsAndConditionsScreen;