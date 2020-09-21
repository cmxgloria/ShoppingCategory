import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

// Header.defaultProps = {
//   title: 'shpping list',
// };
const styles = StyleSheet.create({
  header: {
    padding: 20,
    height: 60,
    backgroundColor: 'orange',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
});
export default Header;
