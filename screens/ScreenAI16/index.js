import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const truckDriverNegotiationScreen = () => {
  const [price, setPrice] = useState('');
  const [offers, setOffers] = useState([{
    id: '1',
    price: '100'
  }, {
    id: '2',
    price: '150'
  }, {
    id: '3',
    price: '200'
  }, {
    id: '4',
    price: '250'
  }, {
    id: '5',
    price: '300'
  }]);

  const handleAccept = id => {// handle accept logic
  };

  const handleReject = id => {// handle reject logic
  };

  const renderOffer = ({
    item
  }) => <View style={styles.offerContainer}>
      <Text style={styles.offerText}>{`$${item.price}`}</Text>
      <TouchableOpacity style={styles.acceptButton} onPress={() => handleAccept(item.id)}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rejectButton} onPress={() => handleReject(item.id)}>
        <Text style={styles.buttonText}>Reject</Text>
      </TouchableOpacity>
    </View>;

  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Negotiate Price</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your price" value={price} onChangeText={setPrice} keyboardType="numeric" />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.offersContainer}>
        <FlatList data={offers} renderItem={renderOffer} keyExtractor={item => item.id} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Previous Bets</Text>
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
    height: 80,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10
  },
  submitButton: {
    height: 50,
    backgroundColor: '#2c3e50',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  offersContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10
  },
  offerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10
  },
  offerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold'
  },
  acceptButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5
  },
  rejectButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5
  },
  tabContainer: {
    height: 50,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabButton: {
    paddingHorizontal: 20
  },
  tabButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default truckDriverNegotiationScreen;