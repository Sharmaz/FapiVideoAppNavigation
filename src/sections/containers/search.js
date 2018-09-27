import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'

import API from '../../../utils/api';

class Search extends Component {
  // Seteamos un state inicial con un texto vacio
  state = {
    text: ''
  }

  handleSubmit = async () => {
    // Obtenemos el resultado por texto del estado del API y lo mandamos en la acción al Store
    const movies = await API.searchMovie(this.state.text);
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0]
      }
    });

    // Utilizamos NavigationActions para movermos a la ruta Movie al hacer el Submit
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Movie'
      })
    );
  }

  handleChangeText = (text) => {
    // Mandamos el texto del input al estado
    this.setState({
      text
    });
  }
  
  render() {
    return (
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Busca tu pelicula"
        underlineColorAndroid="transparent"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})
export default connect(null)(Search);
  