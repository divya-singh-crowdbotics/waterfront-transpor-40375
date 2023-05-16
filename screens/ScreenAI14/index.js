import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
const jobs = [{
  id: 1,
  title: 'Frontend Developer',
  company: 'ABC Inc.',
  location: 'New York',
  salary: '$80,000 - $100,000',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 2,
  title: 'Backend Developer',
  company: 'XYZ Corp.',
  location: 'San Francisco',
  salary: '$90,000 - $110,000',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 3,
  title: 'Full Stack Developer',
  company: 'PQR Ltd.',
  location: 'London',
  salary: '$100,000 - $120,000',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 4,
  title: 'Mobile App Developer',
  company: 'MNO LLC',
  location: 'Tokyo',
  salary: '$110,000 - $130,000',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 5,
  title: 'UI/UX Designer',
  company: 'DEF Co.',
  location: 'Paris',
  salary: '$70,000 - $90,000',
  image: 'https://tinyurl.com/42evm3m3'
}];

const JobsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search Jobs" style={styles.searchInput} />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.notificationIconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.jobsContainer}>
        {jobs.map(job => <TouchableOpacity key={job.id} style={styles.jobCard}>
            <Image source={{
          uri: job.image
        }} style={styles.jobImage} />
            <View style={styles.jobDetails}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobCompany}>{job.company}</Text>
              <Text style={styles.jobLocation}>{job.location}</Text>
              <Text style={styles.jobSalary}>{job.salary}</Text>
            </View>
          </TouchableOpacity>)}
      </View>
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Text style={styles.bottomMenuItemText}>Home - Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Text style={styles.bottomMenuItemText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Text style={styles.bottomMenuItemText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Text style={styles.bottomMenuItemText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Text style={styles.bottomMenuItemText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 5
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  notificationIcon: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  notificationIconImage: {
    width: 20,
    height: 20
  },
  jobsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  jobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10
  },
  jobImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  jobDetails: {
    flex: 1
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  jobCompany: {
    fontSize: 16,
    marginBottom: 5
  },
  jobLocation: {
    fontSize: 14,
    marginBottom: 5
  },
  jobSalary: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  bottomMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  bottomMenuItem: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  bottomMenuItemText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default JobsScreen;