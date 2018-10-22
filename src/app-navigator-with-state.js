import { connect } from 'react-redux';
import {
  reduxifyNavigator
} from 'react-navigation-redux-helpers';
import { BackHandler } from 'react-native';
import AppNavigator from './app-navigator';
import { NavigationActions } from 'react-navigation';

/**
 * Utilizamos reduxifyNavigator el cual nos retorna un HOC
 * Pasamos como parametro AppNavigator y le pasamos la key de nuestro middleware
 */
const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

// Extendemos de el HOC ReduxyfyApp, el cual va a contener el dispatch y el state
class AppNavigatorWithState extends ReduxifyApp {
  componentDidMount() {
    /**
     * Utilizamos de react-native Backhandler escuchando el evento hardwareBackPress
     * le pasamos la función onBackPress para que se ejecute
     */ 
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    // Cuando el componente se desmonte dejamos de escuchar ese evento
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    // Despachamos con redux via props el NavigationActions de back
    this.props.dispatch(
      NavigationActions.back({
        key: null
      })
    );
    return true;
  }
}

// retornamos como state el state.navigation
function mapStateToProps(state) {
  return {
    state: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState);
