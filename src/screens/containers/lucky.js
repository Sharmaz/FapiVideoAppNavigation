import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Search from '../../sections/containers/search';
import Icon from '../../sections/components/icon';

class Lucky extends Component {
  // Personalizamos el Tab con la configuración en navigationOptions
  static navigationOptions = () => {
    return {
      title: "Suerte",
      tabBarIcon: <Icon icon="🍀" />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>🍀</Text>
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Lucky;
