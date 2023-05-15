import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const PrivacyPolicyScreen = () => {
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Privacy Policy</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Information Collection and Use</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Log Data</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Cookies</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Service Providers</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Security</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Links to Other Sites</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Children’s Privacy</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        <Text style={styles.title}>Changes to This Privacy Policy</Text>
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
        uri: "https://tinyurl.com/42evm3m3"
      }} />
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#007AFF",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  content: {
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 20
  }
});
export default PrivacyPolicyScreen;