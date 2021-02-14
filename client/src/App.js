import React, { Fragment, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Page from './pages/Page/Page.jsx';
import Error from './pages/Error/Error.jsx';
import { Loading } from './theme';

// TODO: Model for Pages
const fakeDataFromDB = [
  {
    id: "p2021HP",
    name: "Home",
    route: "/",
    nav: {
      title: "Home",
      inNav: true, // default is false
    },
    components: [
      {
        name: "Header",
        data: {
          title: "Home Page"
        }
      },
      {
        name: "Footer",
        data: {
          empty: true
        }
      }
    ]
  },
  {
    id: "p2021HP",
    name: "About",
    route: "/about",
    nav: {
      title: "Our Story",
      inNav: true,
      inFooter: true
    },
    components: [
      {
        name: "Header",
        data: {
          title: "Our Story"
        }
      }
    ]
  },
  {
    id: "p2021HP",
    name: "Privacy Policy",
    route: "/privacy",
    nav: {
      title: "Privacey Policy"
    },
    components: [
      {
        name: "Header",
        data: {
          title: "Privacey Policy"
        }
      }
    ]
  }
]

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
    updatePages(fakeDataFromDB); // load the fake data
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

          {/* LOAD PAGES */}
          {pages.map((page) => {
            return <Route key={page.id} exact path={page.route} render={() => <Page key={page.id} components={page.components} />} />
          })}

          {/* DO NOT CODE BELOW THIS LINE */}
          <Route render={() => <Error />} />

        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};
