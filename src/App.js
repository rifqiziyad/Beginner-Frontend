import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicRedux from "./pages/learning/BasicRedux/BasicRedux";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import PrivateRoute from "./helpers/PrivateRoutes";
import PublicRoute from "./helpers/PublicRoutes";
import { PersistGate } from "redux-persist/integration/react";

// import Login from "./pages/auth/Login/login";
import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/Home/Home";
import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";

import HomePage from "./pages/main/Home/HomePage";
import movieDetail from "./pages/main/Movie Detail/movieDetail";
import orderPage from "./pages/main/Order Page/orderPage";
import Payment from "./pages/main/Payment Page/Payment";
import paymentMethod from "./components/PaymentMethod/paymentMethod";
import Admin from "./pages/main/Manage Movie/Admin";
import SignIn from "./pages/auth/Sign In/SignIn";
import Register from "./pages/auth/Register/Register";
import Profile from "./pages/main/Profile Page/Profile";
import dashboard from "./pages/main/Dashboard/dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <PublicRoute
                restricted={true}
                path="/login"
                exact
                component={SignIn}
              />
              <PublicRoute
                restricted={true}
                path="/register"
                exact
                component={Register}
              />
              <PublicRoute
                path="/learning/basic-react"
                exact
                component={BasicReact}
              />
              <PrivateRoute
                path="/learning/basic-home"
                exact
                component={BasicHome}
              />
              <Route
                path="/learning/basic-movie-detail/:id"
                exact
                component={BasicMovieDetail}
              />
              <Route
                path="/learning/basic-redux"
                exact
                component={BasicRedux}
              />
              <PublicRoute path="/" exact component={HomePage} />
              <PublicRoute
                path="/movie-detail/:id"
                exact
                component={movieDetail}
              />
              <PrivateRoute path="/order-page" exact component={orderPage} />
              <PrivateRoute path="/payment" exact component={Payment} />
              <PublicRoute
                path="/payment-method"
                exact
                component={paymentMethod}
              />
              <PrivateRoute path="/manage-movie" exact component={Admin} />

              <PrivateRoute path="/profile" exact component={Profile} />
              <PrivateRoute path="/dashboard" exact component={dashboard} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
