import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons from react-native-vector-icons

export const AccountCreationScreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [servicesOffered, setServicesOffered] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [cityVillage, setCityVillage] = useState('');
  const [workExperience, setWorkExperience] = useState(0); // Initialize work experience with 0
  const [previousWork, setPreviousWork] = useState('');

  const handleIncrement = () => {
    setWorkExperience(workExperience + 1);
  };

  const handleDecrement = () => {
    if (workExperience > 0) {
      setWorkExperience(workExperience - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitted Data:', {
      name,
      phoneNumber,
      servicesOffered,
      address,
      state,
      district,
      cityVillage,
      workExperience,
      previousWork
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon name="account-circle" size={40} color="#000" style={styles.profileIcon} />
        <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad" 
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>Services Offered</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter services offered"
          value={servicesOffered}
          onChangeText={setServicesOffered}  />
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>Address</Text>
        <TextInput
          style={[styles.input, styles.largeInput]} 
          multiline
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>State</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your state"
          value={state}
          onChangeText={setState}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>District</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your district"
          value={district}
          onChangeText={setDistrict}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>City/Village</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your city/village"
          value={cityVillage}
          onChangeText={setCityVillage}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>Work Experience</Text>
        <View style={styles.incrementColumn}>
          <Button title="-" onPress={handleDecrement} />
          <Text style={styles.workExperienceText}>{workExperience}</Text>
          <Button title="+" onPress={handleIncrement} />
        </View>
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>Previous Work</Text>
        <TextInput
          style={[styles.input, styles.largeInput]}
          multiline
          placeholder="Enter previous work experience"
          value={previousWork}
          onChangeText={setPreviousWork}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  column: {
    marginBottom: 20,
  },
  columnTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  largeInput: {
    height: 80, 
  },
  incrementColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workExperienceText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});
