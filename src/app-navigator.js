import React from 'react';
import { 
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator
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
import DrawerComponent from './sections/components/drawer';

// Main es nuestro StackNavigator
const Main = createStackNavigator(
  {
    Home,
    Category
  },
  {
    navigationOptions: {
      header: Header
    },
    cardStyle: {
      backgroundColor: 'white'
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
        tabBarIcon: <Icon icon="🏠"/>,
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
 * Para nuestro modal que va a hacer el componente de Movie, lo sacamos de Main y lo
 * agregamos en WithModal, tambien pasamos todo el TabNavigator aqui, ademas seteamos
 * configuración de modal, color de fondo y activamos los gestures en android
 */
const WithModal = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    },
    Movie,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    },
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);

/**
 * Creamos DrawerNavigator
 */

 const DrawerNavigator = createDrawerNavigator(
   {
     Main: {
       screen: WithModal,
       navigationOptions: {
        title: 'Inicio',
        drawerIcon: <Icon icon="🏠"/>
       }
     },
     Acerca: {
       screen: About
     },
     Suerte: Lucky
   },
   {
    drawerWidth: 200,
    drawerBackgroundColor: '#f6f6f6',
    contentComponent: DrawerComponent,
    contentOptions: {
      activeBackgroundColor: '#E82943',
      activeTintColor: 'white',
      inactiveBackgroundColor: 'white',
      inactiveTintColor: '#828282',
      itemStyle: {
        borderBottomWidth: .5,
        borderBottomColor: 'rgba(0,0,0,.5)'
      },
      labelStyle: {
        marginHorizontal: 5
      },
      iconContainerStyle: {
        marginHorizontal: 5
      }
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
    App: DrawerNavigator,
    Login: Login,
    Loading: Loading
  },
  {
    initialRouteName: 'Loading',
  }
);

export default SwitchNavigator;
