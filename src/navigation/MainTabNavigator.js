// MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faQuestionCircle, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import RequestsScreen from '../screens/RequestsScreen';
import EnquiryScreen from '../screens/EnquiryScreen';
import BookingScreen from '../screens/BookingsScreen';
import RequestDetailScreen from '../screens/RequestDetailsScreen';
import CostEstimationScreen from '../screens/CostEstimationScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function RequestsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Request" component={RequestsScreen} />
      <Stack.Screen name="RequestDetail" component={RequestDetailScreen} />
      <Stack.Screen name="CostEstimation" component={CostEstimationScreen} />
    </Stack.Navigator>
  );
}

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Requests') {
            icon = focused ? faList : faList;
          } else if (route.name === 'Enquiry') {
            icon = focused ? faQuestionCircle : faQuestionCircle;
          } else if (route.name === 'Booking') {
            icon = focused ? faCalendarCheck : faCalendarCheck;
          }

          return <FontAwesomeIcon icon={icon} size={size} color={color} />;
        },
      })}
      tabBarActiveTintColor="blue"
      tabBarInactiveTintColor="gray"
      tabBarStyle={{
        display: 'flex'
      }}
    >
      <Tab.Screen name="Requests" component={RequestsStack} />
      <Tab.Screen name="Enquiry" component={EnquiryScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
    </Tab.Navigator>
  );
};
