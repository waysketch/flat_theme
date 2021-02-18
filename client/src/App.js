import React, { Fragment, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Page from './pages/Page/Page.jsx';
import Error from './pages/Error/Error.jsx';
import NoDatabase from './pages/NoDatabase/NoDatabase.jsx';
import Setup from './pages/Setup/Setup.jsx';
import { Loading } from './theme';
import axios from 'axios';
import Toolbox from './components/Toolbox/Toolbox.jsx';
import { useSelector } from "react-redux";
import Toast from './components/Toast/Toast.jsx';

export default function App() {
  // ============= //
  // === HOOKS === //
  // ============= //
  const [loading, updateLoading] = useState(true);
  const [pages, updatePages] = useState([]);

  // =============== //
  // === ON LOAD === //
  // =============== //
  useEffect(() => {
    // === GET PAGES === //
    axios.get('/api/pages')
      .then(pageArray => {
        // === 200 === //
        updatePages(pageArray.data);
      })
      .catch(_ => {
        // === NOT 200 === //
        console.log('Unable to get pages from server in [App.js].');
      })
      .finally(() => {
        // === remove page loading === //
        updateLoading(false);
      });
  }, []);

  // ============== //
  // === RETURN === //
  // ============== //
  return (
    <Fragment>
      { /* LOADING */}
      {loading ? <Loading /> : ""}

      { /* SITE */}
      <BrowserRouter>
        <Switch>
          {/* LOAD PAGES */}
          {
            pages.length > 0
              ? pages.map(page => {
                return <Route key={page.id} exact path={page.route} render={() => <Page key={page.id} components={page.components} />} />
              })
              :
              <Fragment>
                <Route exact path="/setup" render={() => <Setup />} />
                <Route exact path="/" render={() => <NoDatabase />} />
              </Fragment>
          }

          {/* DO NOT CODE BELOW THIS LINE */}
          <Route render={() => <Error />} />

        </Switch>
      </BrowserRouter>

      {/* TOOLBOX */}
      { useSelector(state => state.isLoggedIn) ? <Toolbox /> : ""}

      {/* TOAST */}
      { <Toast /> }
    </Fragment>
  );
};
