import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = (title, addItem) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);

  return (
    <View style={styles.input}>
      <TextInput
        placeholder="Add Item"
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} onChange={onChange} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: 'grey',
    margin: 7,
    padding: 12,
  },
  btnText: {
    fontSize: 22,
    color: 'darkblue',
    textAlign: 'center',
  },
});
export default AddItem;
