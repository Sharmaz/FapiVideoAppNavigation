import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers/videos';

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
  blacklist: ['selectedMovie']
}

// Persistimos los reducers pasando la configuración y los reducers
const persistedReducer = persistReducer(persistConfig, reducer)

// Creamos el Store a partir de los reducers persistidos
const store = createStore(persistedReducer)

// Persistimos el Store
const persistor = persistStore(store)

export { store, persistor };
