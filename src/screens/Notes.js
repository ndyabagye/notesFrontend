import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import ajax from '../services/FetchNotes';

const Notes = ({navigation}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const res = await ajax.getNotes();
      setNotes(res);
    };

    getNotes();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'gray', fontSize: 20}}>I am the notes screen </Text>
      <Button
        title="Go to Notes... again"
        onPress={() => navigation.push('Notes')}
      />
      <Button title="Go To Home" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Notes;
