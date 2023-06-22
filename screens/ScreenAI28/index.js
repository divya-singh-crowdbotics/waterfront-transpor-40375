import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
const transactions = [{
  id: '1',
  type: 'sent',
  amount: '50',
  date: '2021-10-01'
}, {
  id: '2',
  type: 'received',
  amount: '100',
  date: '2021-10-02'
}, {
  id: '3',
  type: 'sent',
  amount: '30',
  date: '2021-10-03'
}, {
  id: '4',
  type: 'received',
  amount: '200',
  date: '2021-10-04'
}, {
  id: '5',
  type: 'sent',
  amount: '75',
  date: '2021-10-05'
}];

const WalletHistoryScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.transactionItem}>
      <Image style={styles.transactionIcon} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionType}>{item.type}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>;

  return <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList data={transactions} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  transactionDetails: {
    marginLeft: 10
  },
  transactionType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  transactionDate: {
    fontSize: 14,
    color: '#999'
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 'auto'
  }
});
export default WalletHistoryScreen;