import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import Loading from './src/sections/components/loading';
import AppNavigatorWithState from './src/app-navigator-with-state';

type Props = {};
export default class App extends Component<Props> {
  render() {
    // Desactivamos los warnings en dispositivo para el TabNavigator
    console.disableYellowBox = true; 
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    );
  }
}
