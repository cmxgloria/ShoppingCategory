import React, {useState} from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  // Image,
} from 'react-native';
import Header from './components/Header';
import {uuid} from 'uuidv4';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'beef'},
    {id: uuid(), text: 'lamb'},
    {id: uuid(), text: 'milk'},
    {id: uuid(), text: 'ice-cream'},
    {id: uuid(), text: 'pizza'},
    {id: uuid(), text: 'chicken'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (item) => {
    if (!item) {
      Alert.alert('ERROR', 'Please enter the right item', {
        item: 'Ok',
      });
    } else {
      setItems((prevItems) => {
        return [{id: uuid(), text: item, ...prevItems}];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shooping Lists</Text>
      <Header title="shopping list" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        // renderItem={({item}) => <Text>{item.text}</Text>}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      {/* <Image
        source={{
          uri:
            'https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        }}
        style={styles.img}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingt: 60,
  },
  text: {
    color: 'blue',
    fontSize: 30,
  },
  // img: {
  //   width: 80,
  //   height: 50,
  //   borderRadius: 50%
  // },
});
export default App;
