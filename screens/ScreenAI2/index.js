import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return <Pressable onPress={() => {
    navigation.navigate("ScreenAI3");
  }}><View style={styles.container}>
      <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.subtitle}>Get started by signing in or creating an account</Text>
    </View></Pressable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20
  }
});
export default SplashScreen;