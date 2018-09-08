import { createStackNavigator } from 'react-navigation';
import Loader from './sections/components/loading';

// Main es nuestro StackNavigator
const Main = createStackNavigator(
  {
    Home: Loader
  }
);

export default Main;
