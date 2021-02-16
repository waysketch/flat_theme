// === STATE === //
import { combineReducers } from 'redux';

import isLoggedIn_reducer from './isLoggedIn.js';
import darkMode_reducer from './theme_reducers.js';
import toast_reducer from './toast_reducers.js';

const allReducers = combineReducers({
    isLoggedIn: isLoggedIn_reducer,
    darkMode: darkMode_reducer,
    toast: toast_reducer
});

export default allReducers;