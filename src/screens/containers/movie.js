import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';

import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import Details from '../../videos/components/details';
  
class Movie extends Component {
  // Estado inicial para la animación en 0
  state = {
    opacity: new Animated.Value(0),
  }

  /**
   * Configuramos el navigationOptions para agregar el botón de close a nuestro Header
   * Quitamos Header de nuestro metodo Render
   * Para regresarnos a la pantalla previa usamos el metodo goBack() de navigation en el onPress
   */
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Header>
          <Close
            onPress={() => { navigation.goBack() }}
          />
        </Header>
      )
    }
  }

  closeVideo = () => {
    // Con esta acción seteamos en false la propiedad selectedMovie
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: false,
      }
    });
  }

  componentDidMount() {
    // le asignamos un timing hacia el valor 1 con una duración de 1 segundo
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }
  
  render() {
    // Como children de header le mandamos el componente Close que acciona closeVideo
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity
        }}
      >
        <MovieLayout>
          <Player />
          <Details {...this.props.movie}/>
        </MovieLayout>
      </Animated.View>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.videos.selectedMovie
  }
}
  
export default connect(mapStateToProps)(Movie);
  