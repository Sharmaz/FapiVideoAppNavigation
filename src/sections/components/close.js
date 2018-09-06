import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

// Este componente vamos a regresarnos a Home o a "cerrar" el componente Movie
const Close = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={styles.container}
  >
    <Text style={styles.button}>X</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E82943',
    borderRadius: 12,
    width: 25,
    height: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Close;
  