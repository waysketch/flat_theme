// === STATE === //
import {combineReducers} from 'redux';

import isLoggedIn_reducer from './isLoggedIn.js';

const allReducers = combineReducers({
    isLoggedIn: isLoggedIn_reducer
});

export default allReducers;