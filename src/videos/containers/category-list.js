import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Empty from '../components/suggestions-empty';
import Category from '../components/category';
import Separator from '../../sections/components/horizontal-separator';
import Layout from '../components/category-list-layout';

class CategoryList extends Component {
  keyExtractor = (item) => {
    // Devolvemos el id del item como un String para usarlo como Key
    return item.id.toString();
  }
  renderSeparator = () => (
    // Devolvemos el componente que servirá de separador
    <Separator/>
  )
  renderEmpty = () => (
    // Devolvemos un componente en caso de que la lista este vacia
    <Empty text="No hay categorías"/>
  )
  viewCategory = (item) => {
    /**
     * Despachamos acciones de navegación a la ruta 'Category'
     * pasando como parametros el genero de las movies
     */
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Category',
        params: {
          genre: item.genres[0]
        }
      })
    );
  }
  renderItem = ({item}) => (
    /**
     * Rendereamos un item de la lista en el componente Category
     * Lo volvemos presionable asignandole un evento
     */
    <Category 
      {...item}
      onPress={() => { this.viewCategory(item)}}
    />
  )

  render() {
    // En la FlatList la convertimos en lista horizontal con la propiedad horizontal
    return (
      <Layout
        title="Categorías"
      >
        <FlatList
          horizontal
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

/**
 * Traemos la lista de categorías del estado y las retornamos como props
 * Al hacer combine reducers nuestro state cambio
 */
function mapStateToProps(state) {
  return {
    list: state.videos.categoryList
  }
}

// Al exportar conectamos el Store con el componente
export default connect(mapStateToProps)(CategoryList);
