import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const truckDriverDetails = {
  name: "John Doe",
  profileImage: "https://tinyurl.com/42evm3m3",
  startLocation: "New York, NY",
  endLocation: "Los Angeles, CA",
  rating: 4.5,
  jobHistory: [{
    id: 1,
    date: "01/01/2022",
    startLocation: "Miami, FL",
    endLocation: "Atlanta, GA",
    payment: "$500"
  }, {
    id: 2,
    date: "02/01/2022",
    startLocation: "Houston, TX",
    endLocation: "Dallas, TX",
    payment: "$300"
  }, {
    id: 3,
    date: "03/01/2022",
    startLocation: "Chicago, IL",
    endLocation: "Detroit, MI",
    payment: "$400"
  }]
};

const TruckDriverDetailsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("jobHistory");

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: truckDriverDetails.profileImage
      }} style={styles.profileImage} />
        <View style={styles.driverInfo}>
          <Text style={styles.driverName}>{truckDriverDetails.name}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>
              {truckDriverDetails.startLocation}
            </Text>
            <Image source={require("./assets/arrow.png")} style={styles.arrowIcon} />
            <Text style={styles.locationText}>
              {truckDriverDetails.endLocation}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Image source={require("./assets/star.png")} style={styles.starIcon} />
            <Text style={styles.ratingText}>{truckDriverDetails.rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, activeTab === "jobHistory" && styles.activeTabButton]} onPress={() => handleTabPress("jobHistory")}>
          <Text style={[styles.tabButtonText, activeTab === "jobHistory" && styles.activeTabButtonText]}>
            Job History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, activeTab === "guideMe" && styles.activeTabButton]} onPress={() => handleTabPress("guideMe")}>
          <Text style={[styles.tabButtonText, activeTab === "guideMe" && styles.activeTabButtonText]}>
            Guide Me
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === "jobHistory" && <View style={styles.jobHistoryContainer}>
          {truckDriverDetails.jobHistory.map(job => <View key={job.id} style={styles.jobContainer}>
              <Text style={styles.jobDate}>{job.date}</Text>
              <View style={styles.jobLocationContainer}>
                <Text style={styles.jobLocationText}>{job.startLocation}</Text>
                <Image source={require("./assets/arrow.png")} style={styles.arrowIcon} />
                <Text style={styles.jobLocationText}>{job.endLocation}</Text>
              </View>
              <Text style={styles.jobPayment}>{job.payment}</Text>
            </View>)}
        </View>}
      {activeTab === "guideMe" && <View style={styles.guideMeContainer}>
          <Text style={styles.guideMeText}>Guide Me Screen</Text>
        </View>}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.problemButton}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI18");
        }}><Text style={styles.problemButtonText}>Problem</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guideMeButton}>
          <Text style={styles.guideMeButtonText}>Guide Me</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  driverInfo: {
    marginLeft: 20
  },
  driverName: {
    fontSize: 24,
    fontWeight: "bold"
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  locationText: {
    fontSize: 16,
    color: "#a5a5a5"
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  ratingText: {
    fontSize: 16,
    color: "#a5a5a5"
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#f5f5f5"
  },
  activeTabButton: {
    backgroundColor: "#007aff"
  },
  tabButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#a5a5a5"
  },
  activeTabButtonText: {
    color: "#fff"
  },
  jobHistoryContainer: {
    paddingHorizontal: 20
  },
  jobContainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    width: 290,
    height: 86
  },
  jobDate: {
    fontSize: 16,
    fontWeight: "bold"
  },
  jobLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  jobLocationText: {
    fontSize: 16,
    color: "#a5a5a5"
  },
  jobPayment: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10
  },
  guideMeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  guideMeText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5"
  },
  problemButton: {
    backgroundColor: "#ff3b30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  problemButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  guideMeButton: {
    backgroundColor: "#007aff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  guideMeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  }
});
export default TruckDriverDetailsScreen;