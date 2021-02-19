import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import allReducers from './redux/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Theme from './theme/Theme.jsx';
import { Reset } from './theme/styled/reset.style.js';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <Reset>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Reset>
    </Theme>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
