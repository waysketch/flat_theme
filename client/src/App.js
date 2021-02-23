import React, { Fragment, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Page from './pages/Page/Page.jsx';
import Error from './pages/Error/Error.jsx';
import NoDatabase from './pages/NoDatabase/NoDatabase.jsx';
import Setup from './pages/Setup/Setup.jsx';
import { Loading } from './theme';
import axios from 'axios';
import Toolbox from './components/Toolbox/Toolbox.jsx';
import { useDispatch, useSelector } from "react-redux";
import { updateNoDatabase, updateLogin, updateUser } from './redux/actions';
import Toast from './components/Toast/Toast.jsx';

export default function App() {
  // ============= //
  // === HOOKS === //
  // ============= //
  const dispatch = useDispatch();
  const [loading, updateLoading] = useState(true);
  const [pages, updatePages] = useState([]);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const user = useSelector(state => state.user);

  // === LOAD THESE IF DATABASE IS BAD === //
  const noDatabase = [
    {
      route: "/",
      page: <NoDatabase />
    },
    {
      route: "/setup",
      page: <Setup />
    }
  ];

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
      .catch( _ => {
        // === NOT 200 === //
        console.log(_);
        dispatch(updateNoDatabase(true));
      })
      .finally(() => {
        axios.get("/auth/user").then( res => {
          if (!!res.data.user) {
            dispatch(updateLogin(true));
            dispatch(updateUser(res.data.user));
          } else {
            dispatch(updateLogin(false));
            dispatch(updateUser(null));
          };
        })
        .finally( () => {
          // === remove page loading === //
          updateLoading(false);
        });
      });
  }, [dispatch]);

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
              ? pages.map((page, index) => {
                return <Route key={`Page_${index}`} exact path={page.route} render={() => <Page key={page.id} hideFooter={page.hide_footer ?? false} components={page.components} />} />
              })
              :
              noDatabase.map((page, index) => {
                return <Route key={index} exact path={page.route} render={() => page.page} />
              })
          }

          {/* DO NOT CODE BELOW THIS LINE */}
          <Route render={() => <Error />} />
        </Switch>
        
          {/* TOOLBOX */}
          {
            isLoggedIn && user?.verified && user.key === "GOLD"
              ?
              <Toolbox />
              :
              ""
          }

          {/* TOAST */}
          {<Toast />}
          
      </BrowserRouter>

    </Fragment>
  );
};
