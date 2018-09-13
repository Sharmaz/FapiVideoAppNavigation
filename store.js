import { 
  createStore,
  applyMiddleware
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import reducer from './reducers/index';

// Creamos el Store, le pasamos los reducres y un estado inicial (las listas)
/* const store = createStore(reducer, {
  suggestionList: [],
  categoryList: []
});
*/ 

/**
 * Configuración de persistencia, storage usa webstorage o asyncstorage
 * En blacklist le seteamos que propiedad del Store no queremos persistir
 */
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation']
};

// Persistimos los reducers pasando la configuración y los reducers
const persistedReducer = persistReducer(persistConfig, reducer);

// Creamos el middleware de Navigation de nombre root que devuelve el estado de navigation(key en reducers)
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
);

// Creamos el Store a partir de los reducers persistidos y le pasamos el navigationMiddleware
const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware)
);

// Persistimos el Store
const persistor = persistStore(store);

export { store, persistor };
