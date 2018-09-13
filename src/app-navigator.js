import { createStackNavigator } from 'react-navigation';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';

// Main es nuestro StackNavigator
const Main = createStackNavigator(
  {
    Home,
    Movie
  }
);

export default Main;
