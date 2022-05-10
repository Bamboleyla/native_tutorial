/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

const App = () => {
  const [name, setName] = useState('Mash');
  const [session, setSession] = useState({ number: 6, title: 'state' });
  const [current, setCurrent] = useState(true);

  const onclickHandler = () => {
    setName('Programming with Mash');
    setSession({ number: 7, title: 'style' });
    setCurrent(false);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This session is number {session.number}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title="войти" onPress={onclickHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
