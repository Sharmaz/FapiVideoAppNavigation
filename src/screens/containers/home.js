import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import API from '../../../utils/api';

import Header from '../../sections/components/header';
import CategoryList from '../../videos/containers/category-list';
import SuggestionList from '../../videos/containers/suggestion-list';
import Movie from '../../screens/containers/movie';
import Search from '../../sections/containers/search';

class Home extends Component {
  /**
   * Configuración de la navegación del Header, con el metodo estatico navigationOptions
   * Con esto podemos quitar el componente Header del metodo Render
   */
  static navigationOptions = () => {
    return {
      header: Header
    }
  }

  // Hacemos asincrono el metodo componentDidMount
  async componentDidMount() {
    // Hardcodeamos con Id 10 un array de sugerencias
    const suggestionList = await API.getSuggestion(10);
    
    /***
     * El metodo dispatch del store que ahora pasa por props,
     * creamos las acciones de sugerencias y categorías
     */ 
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    });

    // Obtenemos las peliculas para las categorías
    const categoryList = await API.getMovies();

    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Search />
        <CategoryList />
        <SuggestionList />
      </Fragment>
    );
  }
}

export default connect(null)(Home);
