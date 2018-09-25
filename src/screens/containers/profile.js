import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar
} from 'react-native';
import Icon from '../../sections/components/icon';

class Profile extends Component {
  // Personalizamos el Tab con la configuración en navigationOptions
  static navigationOptions = () => {
    return {
      title: "Perfil",
      tabBarIcon: <Icon icon="😎" />
    }
  }

  // Cambiamos el color del contenido del StatusBar, al escuchar el evento didFocus
  componentDidMount() {
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white');
    });
  }

  componentWillUnmount() {
    this.focus.remove();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Nombre de usuario</Text>
        <Button
          title="Cerrar Sesión"
          color="#67a52e"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default Profile;
