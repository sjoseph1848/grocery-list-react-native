/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function App() {
  const [groceries, setGroceries] = useState([]);
  const [isAddGroceries, setIsAddGroceries] = useState(false);

  return (
    <View style={styles.screen}>
      <Button title="Add Groceries" onPress={() => setIsAddGroceries(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
