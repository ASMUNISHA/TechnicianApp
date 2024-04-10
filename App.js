// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavigator } from './src/navigation/MainTabNavigator'; // Import named export

const App = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator/>
    </NavigationContainer>
  );
};

export default App;
