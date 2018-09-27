import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';

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

  /**
   * Despachamos la acción para "cerrar sesión" removiendo al usuario y nos pasamos 
   * al componente Loading para tomar desiciones sobre a que pantalla navegaremos
   */
  handleLogout = () => {
    this.props.dispatch({
      type: 'REMOVE_USER'
    });
    this.props.navigation.navigate('Loading');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.props.user.username}</Text>
        <Button
          title="Cerrar Sesión"
          color="#67a52e"
          onPress={this.handleLogout}
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

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile);
