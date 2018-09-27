import React from 'react';
import { 
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import Header from './sections/components/header';
import About from './screens/containers/about';
import Lucky from './screens/containers/lucky';
import Profile from './screens/containers/profile';
import Icon from './sections/components/icon';
import Login from './screens/containers/login';
import Loading from './screens/containers/loading';

// Main es nuestro StackNavigator
const Main = createStackNavigator(
  {
    Home,
    Movie,
    Category
  },
  {
    navigationOptions: {
      header: Header
    }
  }
);

/**
 * En este StackNavigator (Tabs Inferiores), agregamos el Main en el tab de Home
 * Y agregamos las otras Screens, cambiamos el titulo de Home con navigationOptions
 * Para personalizar como se ve el estado activo o no activo en las tabs,
 * le agregamos un poco de estilos en tabBarOptions.
 */
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Icon icon="🏠"/>
      }
    },
    About: {
      screen: About
    },
    Lucky: {
      screen: Lucky
    },
    Profile: {
      screen: Profile
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#E82943'
    }
  }
);

/**
 * Creamos el nuevo Stack con SwitchNavigator usamos una ruta para la Aplicación
 * Tambien seteamos una ruta para el Login y una para Loading
 * Seteamos como ruta inicial a Loading
 */
const SwitchNavigator = createSwitchNavigator(
  {
    App: TabNavigator,
    Login: Login,
    Loading: Loading
  },
  {
    initialRouteName: 'Loading',
  }
);


export default SwitchNavigator;
