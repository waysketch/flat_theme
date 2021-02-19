// === STATE === //
import { combineReducers } from 'redux';

import noDatabaseFound_reducer from './onLoad_reducers';
import isLoggedIn_reducer from './isLoggedIn.js';
import darkMode_reducer from './theme_reducers.js';
import toast_reducer from './toast_reducers.js';
import access_reducer from './access_reducer.js';

const allReducers = combineReducers({
    isLoggedIn: isLoggedIn_reducer,
    user: access_reducer,
    darkMode: darkMode_reducer,
    noDatabase: noDatabaseFound_reducer,
    toast: toast_reducer
});

export default allReducers;