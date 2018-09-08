import {
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import AppNavigator from '../src/app-navigator';

// Creamos nuestro reducer para el navigation envolviendo el componente AppNavigator
const navigationReducer = createNavigationReducer(AppNavigator);

export default navigationReducer;
