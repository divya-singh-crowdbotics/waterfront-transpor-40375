import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from "react-native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {// handle sign up logic here
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Pressable onPress={() => {
        Linking.openURL('https://example.com/privacy-policy');
      }}>
          <Text style={styles.checkboxLabel}>
            I agree to the <Pressable onPress={() => {
            navigation.navigate("ScreenAI4");
          }}><Text style={styles.link}>Terms and Conditions</Text></Pressable> and <Pressable onPress={() => {
            navigation.navigate("ScreenAI5");
          }}><Text style={styles.link}>Privacy Policy</Text></Pressable>
          </Text>
        </Pressable>
      </View>
      <TouchableOpacity style={[styles.button, isChecked && styles.buttonEnabled]} onPress={handleSignUp} disabled={!isChecked}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI8");
      }}><Text style={styles.buttonText}>Sign Up</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  checkmark: {
    fontSize: 16,
    color: "#007AFF"
  },
  checkboxLabel: {
    fontSize: 16
  },
  link: {
    color: "#007AFF"
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5
  },
  buttonEnabled: {
    opacity: 1
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default SignUpScreen;