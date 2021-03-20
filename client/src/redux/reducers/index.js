// === STATE === //
import { combineReducers } from 'redux';

import noDatabaseFound_reducer from './onLoad_reducers';
import isLoggedIn_reducer from './isLoggedIn.js';
import darkMode_reducer from './theme_reducers.js';
import toast_reducer from './toast_reducers.js';
import access_reducer from './access_reducer.js';
import menu_reducer from './menu_reducer.js';
import footer_reducer from './footer_reducer.js';
import settings_reducer from './settings_reducer.js';
import components_reducer from './components_reducer.js';

const allReducers = combineReducers({
    settings: settings_reducer,
    isLoggedIn: isLoggedIn_reducer,
    user: access_reducer,
    darkMode: darkMode_reducer,
    noDatabase: noDatabaseFound_reducer,
    toast: toast_reducer,
    menu: menu_reducer,
    footerMenu: footer_reducer,
    components: components_reducer
});

export default allReducers;