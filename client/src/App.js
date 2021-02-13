import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Error from './pages/Error/Error.jsx';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          {/* HOME PAGE */}
          <Route exact path="/" render={() => <Home />} />

          {/* LOGIN PAGE */}
          <Route exact path="/login" render={() => <Login />} />

          {/* DO NOT CODE BELOW THIS LINE */}
          <Route render={() => <Error />} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
