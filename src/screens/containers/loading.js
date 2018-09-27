import React, { Component } from 'react';
import LoadingLayout from '../../sections/components/loading';
import { connect } from 'react-redux';

class Loading extends Component {
  
  // Validamos si existe el usuario (esta logeado) que pantalla renderear o navegar
  componentDidMount() {
    if(this.props.user) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Login');
    }
  }
  render() {
    return (
      <LoadingLayout />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Loading);
