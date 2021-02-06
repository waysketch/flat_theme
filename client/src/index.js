import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allReducers from './redux/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Theme from './theme/Theme.jsx';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Theme>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
