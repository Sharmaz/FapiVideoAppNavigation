import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
const VerticalSeparator = (props) => (
  <View style={[
    styles.container,
    {
      // Color opcional por props
      borderTopColor: (props.color) ? props.color : '#eaeaea'
    }
    ]}>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
  }
});

export default VerticalSeparator;
