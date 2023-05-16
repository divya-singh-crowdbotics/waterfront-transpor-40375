import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TruckDriverJobDetailsScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Truck Driver Job Details</Text>
      </View>
      <View style={styles.jobDetails}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.jobImage} />
        <View style={styles.jobInfo}>
          <Text style={styles.jobTitle}>Truck Driver</Text>
          <Text style={styles.jobLocation}>Location: New York, NY</Text>
          <Text style={styles.jobDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, sapien vel bibendum bibendum, elit sapien bibendum
            sapien, vel bibendum sapien elit vel sapien.
          </Text>
          <Text style={styles.jobPay}>Pay: $20/hour</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.acceptButton}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI17");
        }}><Text style={styles.buttonText}>Accept Job</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.buttonText}>Reject Job</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.negotiateButton}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI16");
        }}><Text style={styles.buttonText}>Negotiate Pay</Text></Pressable>
        </TouchableOpacity>
      </View>
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
  jobDetails: {
    flexDirection: 'row',
    marginBottom: 30
  },
  jobImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20
  },
  jobInfo: {
    flex: 1
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  jobLocation: {
    fontSize: 16,
    marginBottom: 10
  },
  jobDescription: {
    fontSize: 16,
    marginBottom: 10
  },
  jobPay: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    flex: 1,
    marginRight: 10
  },
  rejectButton: {
    backgroundColor: '#F44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    flex: 1,
    marginRight: 10
  },
  negotiateButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    flex: 1
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default TruckDriverJobDetailsScreen;