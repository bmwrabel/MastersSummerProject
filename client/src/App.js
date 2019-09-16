import React, { Fragment, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-react";
import "./components/layout/AppNavbar";
import AppNavbar from "./components/layout/AppNavbar";
import HomePage from "./components/layout/HomePage";
import EditPersonalDetails from "./components/account/EditPersonalDetails";
import SessionList from "./components/account/SessionList";
import Dashboard from "./components/account/Dashboard";
import SessionView from "./components/session/SessionView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/accountActions";
import setAuthToken from "./utilities/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <AppNavbar />
          <section>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="#about" />
              <Route exact path="#contact" />
              <PrivateRoute exact path="/account" component={Dashboard} />
              <PrivateRoute
                exact
                path="/edit-personal-details"
                component={EditPersonalDetails}
              />
              <PrivateRoute
                exact
                path="/user-sessions"
                component={SessionList}
              />
              <PrivateRoute
                exact
                path="/sessions/:id"
                component={SessionView}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
