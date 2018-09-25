import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import Icon from '../../sections/components/icon';

class About extends Component {
  // Personalizamos el Tab con la configuración en navigationOptions
  static navigationOptions = () => {
    return {
      title: "Acerca de",
      tabBarIcon: <Icon icon="📺" />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://static.platzi.com/media/achievements/badge-reactnative-9c23a814-e9c3-4041-afbd-ff8083fbf32f.png'}}
          style={styles.logo}
        />
        <Text style={styles.text}>Fapi Video es construido como una aplicación para aprender React Native y React Navigation</Text>
        <Text style={styles.text}>@elSharmaz</Text>
        <Text style={styles.text}>2019</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#022c43',
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  }
});

export default About;
