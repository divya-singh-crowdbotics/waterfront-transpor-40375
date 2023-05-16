import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const JobsScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <TouchableOpacity style={styles.notificationIcon}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI21");
        }}><Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.notificationIconImage} /></Pressable>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search Jobs" style={styles.searchBar} />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.jobsListContainer}>
        {
        /* Dummy data for jobs list */
      }
        <Text style={styles.jobTitle}>Truck Driver</Text>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI15");
      }}><Text style={styles.jobDescription}>We are looking for a truck driver with a valid CDL license and a clean driving record.</Text></Pressable>
        <Text style={styles.jobLocation}>Location: New York, NY</Text>
        <Text style={styles.jobSalary}>Salary: $50,000 - $70,000 per year</Text>
      </View>
      <View style={styles.navigationMenu}>
        <TouchableOpacity style={styles.navigationButton}>
          <Text style={styles.navigationButtonText}>Home - Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI19");
        }}><Text style={styles.navigationButtonText}>Map</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI20");
        }}><Text style={styles.navigationButtonText}>Wallet</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton}>
          <Text style={styles.navigationButtonText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI24");
        }}><Text style={styles.navigationButtonText}>Settings</Text></Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: 100,
    height: 50
  },
  notificationIcon: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 50
  },
  notificationIconImage: {
    width: 20,
    height: 20
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginRight: 10
  },
  searchButton: {
    backgroundColor: '#1abc9c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  jobsListContainer: {
    marginTop: 20
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  jobDescription: {
    fontSize: 16,
    marginBottom: 10
  },
  jobLocation: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5
  },
  jobSalary: {
    fontSize: 14,
    color: '#1abc9c',
    fontWeight: 'bold'
  },
  navigationMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  navigationButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  navigationButtonText: {
    color: '#1abc9c',
    fontWeight: 'bold'
  }
});
export default JobsScreen;