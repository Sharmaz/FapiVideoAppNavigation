import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

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
  renderItem = ({item}) => (
    // Rendereamos in item de la lista en el componente Category
    <Category {...item}/>
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

// Traemos la lista de categorías del estado y las retornamos como props
function mapStateToProps(state) {
  return {
    list: state.categoryList
  }
}

// Al exportar conectamos el Store con el componente
export default connect(mapStateToProps)(CategoryList);
