/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Button, StyleSheet, FlatList} from 'react-native';
import GroceryInput from './GroceryInput';
import GroceryItem from './GroceryItem';

export default function App() {
  const [groceries, setGroceries] = useState([]);
  const [isAddGroceries, setIsAddGroceries] = useState(false);

  const addGroceryHandler = (groceryItem) => {
    // eslint-disable-next-line no-sparse-arrays
    setGroceries((currentGroceries) => [
      ...groceries,
      {id: Math.random().toString(), value: groceryItem},
    ]);
    setIsAddGroceries(false);
  };

  const removeGroceryHandler = (groceryId) => {
    setGroceries((currentGroceries) => {
      return currentGroceries.filter((grocery) => grocery.id !== groceryId);
    });
  };

  const cancelGroceryAdditonHandler = () => {
    setIsAddGroceries(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add Groceries" onPress={() => setIsAddGroceries(true)} />
      <GroceryInput
        visible={isAddGroceries}
        onAddGrocery={addGroceryHandler}
        onCancel={cancelGroceryAdditonHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={groceries}
        renderItem={(itemData) => (
          <GroceryItem
            id={itemData.item.id}
            onDelete={removeGroceryHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
