import React, { Fragment, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Page from './pages/Page/Page.jsx';
import Error from './pages/Error/Error.jsx';
import NoDatabase from './pages/NoDatabase/NoDatabase';
import { Loading } from './theme';
import axios from 'axios';

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
      .then( pageArray => {
        // === 200 === //
        updatePages(pageArray.data);
      })
      .catch( _ => {
        // === NOT 200 === //
        console.log('Unable to get pages from server in [App.js].');
      })
      .finally( () => {
        // === remove page loading === //
        console.log('ready');
        updateLoading(false);
      })
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
          { pages.length > 0 
          ? pages.map( page => {
            return <Route key={page.id} exact path={page.route} render={() => <Page key={page.id} components={page.components} /> } />
          }) : <Route exact path="/" render={() => <NoDatabase />} /> }

          {/* DO NOT CODE BELOW THIS LINE */}
          <Route render={() => <Error />} />

        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};
