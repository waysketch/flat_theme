import React, { Fragment, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Error from './pages/Error/Error.jsx';
import { Loading } from './theme';

export default function App() {
  // ============= //
  // === HOOKS === //
  // ============= //
  const [loading, updateLoading] = useState(true);

  // =============== //
  // === ON LOAD === //
  // =============== //
  useEffect(() => {
    updateLoading(false);
  }, []);

  // ============== //
  // === RETURN === //
  // ============== //
  return (
    <Fragment>
      { /* LOADING */ }
      {loading ? <Loading /> : ""}

      { /* SITE */ }
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
    </Fragment>
  );
};
