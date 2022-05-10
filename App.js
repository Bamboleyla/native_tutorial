/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('Mash');

  const onclickHandler = () => {
    setName('Style test is done!');

  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={{ width: 150, height: 60 }}>
        {/* Чтобы передать стили кнопке, ее необходимо обернуть в компонент Viev и задать ему стили */}
        <Button title="войти" onPress={onclickHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: 300,
    height: 150,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 10,
    margin: 40,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
