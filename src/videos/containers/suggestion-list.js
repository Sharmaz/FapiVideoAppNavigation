import React, { Component } from 'react';
import { 
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/suggestions-empty';
import Separator from '../../sections/components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  renderEmpty = () => (
    // Devolvemos un componente en caso de que la lista este vacia
    <Empty text="No hay sugerencias"/>
  )
  renderSeparator = () => (
    // Devolvemos el componente que servirá de separador
    <Separator/>
  )
  renderItem = ({item}) => (
    /**
     * Rendereamos in item de la lista en el componente Suggestion
     * Y pasamos por prop una función con la función viewMovie pasandole item
     */
    <Suggestion
      {...item}
      onPress={() => { this.viewMovie(item) }}
    />
  )
  keyExtractor = (item) => {
    // Devolvemos el id del item como un String para usarlo como Key
    return item.id.toString();
  }

  viewMovie = (item) => {
    // creamos una acción para setear la sugerencia seleccionada
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      }
    });
  }

  render() {
    /**
     * FlatList
     * En data obtenemos los datos por props del API
     * ItemSeparatorComponent rendereamos el separador con this.renderSeparator
     * En caso de que la lista este vacia con this.renderSeparator rendereamos un componente
     * Con renderItem rendereamos un componente del array traido por data usando this.renderItem
     * Con keyExtractor vamos a definir como key el id de los elementos del array
     */
    return (
      <Layout
        title='Recomendado para ti'
      >
        <FlatList
          data={this.props.list}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

// Traemos la lista de sugerencias del estado y las retornamos como props
function mapStateToProps (state) {
  return {
    list: state.suggestionList
  }
}

// Al exportar conectamos el Store con el componente
export default connect(mapStateToProps)(SuggestionList);
