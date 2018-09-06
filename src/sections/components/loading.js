import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

const Loading = (props) => (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/logo.png')}
      style={styles.logo}
    />
    <ActivityIndicator color='#E82943'/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginBottom: 10,
    height: 80,
    width: 200,
    resizeMode: 'contain'
  }
});

export default Loading;
