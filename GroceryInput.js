import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GroceryInput = (props) => {
  const [enteredGrocery, setEnteredGrocery] = useState('');

  const groceryInputHandler = (enteredText) => {
    setEnteredGrocery(enteredText);
  };

  const addGroceryHandler = () => {
    props.onAddGrocery(enteredGrocery);
    setEnteredGrocery('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Grocery Item"
          style={styles.input}
          onChangeText={groceryInputHandler}
          value={enteredGrocery}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGroceryHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
});

export default GroceryInput;
