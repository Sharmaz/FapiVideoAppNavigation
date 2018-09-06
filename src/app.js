import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../utils/api';

import Home from './screens/containers/home';
import Header from './sections/components/header';
import CategoryList from './videos/containers/category-list';
import SuggestionList from './videos/containers/suggestion-list';
import Movie from './screens/containers/movie';
import Search from './sections/containers/search';
  
class AppLayout extends Component {

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
    // Comparamos si selectedMovie es verdero o falso para mostrar las pantallas
    if (this.props.selectedMovie) {
      return <Movie />
    }
    return (
      <Home>
        <Header />
        <Search />
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}

function mapStateToProps(state) {
  // pasamos como prop selectedMovie del estado selectedMovie
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(AppLayout);
