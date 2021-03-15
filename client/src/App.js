import React, { Fragment, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { updateNoDatabase, updateLogin, updateUser, updateMenu, updateFooter, updateSettings, updateDarkMode } from './redux/actions';
import Setup from './pages/Setup/Setup.jsx';
import Toast from './components/Toast/Toast.jsx';
import Page from './pages/Page/Page.jsx';
import Error from './pages/Error/Error.jsx';
import NoDatabase from './pages/NoDatabase/NoDatabase.jsx';
import Toolbox from './components/Toolbox/Toolbox.jsx';
import { Loading } from './theme';

export default function App() {
  // ============= //
  // === HOOKS === //
  // ============= //
  const dispatch = useDispatch();
  const [loading, updateLoading] = useState(true);
  const [pages, updatePages] = useState([]);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const user = useSelector(state => state.user);

  // ===================================== //
  // === LOAD THESE IF DATABASE IS BAD === //
  // ===================================== //
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

    // =================== //
    // === BUILD MENUS === //
    // =================== //
    const addLinksToMenu = (pageArray) => {

      if (pageArray.length < 1) return;

      const mainMenu = [];
      const footerMenu = [];

      pageArray.forEach(page => {
        const menuItem = {
          name: page.name,
          route: page.route
        };

        if (page.nav.length === 0) { return; };
        page.nav.forEach(menu => {
          switch (menu) {
            case "header":
              mainMenu.push(menuItem);
              break;
            case "footer":
              footerMenu.push(menuItem);
              break;
            default:
              console.log(`Unable to add menu item. Menu ${menu} was not found.`);
              break;
          }
        });
        dispatch(updateMenu(mainMenu));
        dispatch(updateFooter(footerMenu));
      });
    };

    // ================= //
    // === GET PAGES === //
    // ================= //
    axios.get('/api/pages')
      .then(pageArray => {
        // === 200 === //
        updatePages(pageArray.data);
        addLinksToMenu(pageArray.data);
      })
      .catch(_ => {
        // === NOT 200 === //
        dispatch(updateNoDatabase(true));
      })
      .finally(() => {
        // === SETTINGS === //
        axios.get('/api/settings')
          .then(settings => {
            dispatch(updateSettings(settings.data));
            dispatch(updateDarkMode(settings.data.darkMode));
          })
          .catch(err => {
            console.log(err.msg);
          })
          .finally(() => {
            // === AUTO LOGIN === //
            axios.get("/auth/user").then(res => {
              if (!!res.data.user) {
                dispatch(updateLogin(true));
                dispatch(updateUser(res.data.user));
              } else {
                dispatch(updateLogin(false));
                dispatch(updateUser(null));
              };
            })
              .finally(() => {
                // === remove page loading === //
                updateLoading(false);
              });
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
