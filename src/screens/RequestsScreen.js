// screens/RequestsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Card, Title, Paragraph } from 'react-native-paper';

const requestsData = [
  {
    id: 1,
    date:'02.04.2024',
    title: 'Request 1',
    location: 'Mutlur',
    problem: 'Electrical',
  },
  {
    id: 2,
    title: 'Request 2',
    date:'03.04.2024',
    location: 'Chidhambaram',
    problem: 'Electrical',
  },
  // Add more request data as needed
];

export default function RequestsScreen({ navigation }) {
  const navigateToDetails = (request) => {
    navigation.navigate('RequestDetail', { request });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesomeIcon icon={faBars} size={20} color="black" />
        </TouchableOpacity>
        <Text>Requests</Text>
        <View style={{ width: 20 }}></View>
      </View>
      <ScrollView>
        {requestsData.map(request => (
          <TouchableOpacity key={request.id} onPress={() => navigateToDetails(request)}>
            <Card style={{ margin: 10 }}>
              <Card.Content>
                <Title>{request.title}</Title>
                <Paragraph>Date: {request.date}</Paragraph>
                <Paragraph>Location: {request.location}</Paragraph>
                <Paragraph>Problem: {request.problem}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
