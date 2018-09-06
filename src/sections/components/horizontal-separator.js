import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
const HorizontalSeparator = (props) => (
  <View 
    style={styles.container}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5
  }
});

export default HorizontalSeparator;
