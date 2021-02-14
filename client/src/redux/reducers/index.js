// === STATE === //
import { combineReducers } from 'redux';

import isLoggedIn_reducer from './isLoggedIn.js';
import darkMode_reducer from './theme_reducers';

const allReducers = combineReducers({
    isLoggedIn: isLoggedIn_reducer,
    darkMode: darkMode_reducer
});

export default allReducers;