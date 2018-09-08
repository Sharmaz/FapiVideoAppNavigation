import { combineReducers } from 'redux';

import navigation from './navigation';
import videos from './videos';

// Combinamos los reducers para exportar solamente reducer
const reducer = combineReducers({
  videos,
  navigation
});

export default reducer;
