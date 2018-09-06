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
          <Header>
            <Close
              onPress={this.closeVideo}
            />
          </Header>
          <Player />
          <Details {...this.props.movie}/>
        </MovieLayout>
      </Animated.View>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie
  }
}
  
export default connect(mapStateToProps)(Movie);
  