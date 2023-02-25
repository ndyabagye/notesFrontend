import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import NotesScreen from './src/screens/Notes';

const Stack = createNativeStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default YourApp;
