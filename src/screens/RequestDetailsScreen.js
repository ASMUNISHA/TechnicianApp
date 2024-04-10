// screens/RequestDetailScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RequestDetailScreen({ route, navigation }) {
  const { request } = route.params;

  const handleAccept = () => {
    // Navigate to CostEstimationScreen with requestId
    navigation.navigate('CostEstimation', { requestId: request.id });
  };

  const handleReject = () => {
    // Implement logic for rejecting the request
    // For example, you can display a confirmation dialog or perform any other action
    console.log('Request rejected');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Detail</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.text}>{request.title}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.text}>{request.date}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.text}>{request.location}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Problem:</Text>
        <Text style={styles.text}>{request.problem}</Text>
      </View>
      <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
        <Text style={styles.buttonText}>Reject</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  text: {
    flex: 1,
  },
  acceptButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  rejectButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
