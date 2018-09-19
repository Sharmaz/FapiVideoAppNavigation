import { createStackNavigator } from 'react-navigation';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import Header from './sections/components/header';

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

export default Main;
