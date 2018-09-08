import { connect } from 'react-redux';
import {
  reduxifyNavigator
} from 'react-navigation-redux-helpers';

import AppNavigator from './app-navigator';

/**
 * Utilizamos reduxifyNavigator el cual nos retorna un HOC
 * Pasamos como parametro AppNavigator y le pasamos la key de nuestro middleware
 */
const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

// Extendemos de el HOC ReduxyfyApp, el cual va a contener el dispatch y el state
class AppNavigatorWithState extends ReduxifyApp {

}

// retornamos como state el state.navigation
function mapStateToProps(state) {
  return {
    state: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState);
