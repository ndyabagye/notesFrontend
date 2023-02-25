/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'red', fontSize: 32}}>I am the home screen</Text>
      <Button
        title="Go To Notes"
        onPress={() => navigation.navigate('Notes')}
      />
    </View>
  );
};

export default Home;
