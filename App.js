/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      {/* Блок1 */}
      <View style={styles.block1}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      {/* Блок2 */}
      <View style={styles.block2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      {/* Блок3 */}
      <View style={styles.block3}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    flexDirection: 'column',
  },
  block1: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  block2: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  block3: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#ff00ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#ffff00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
