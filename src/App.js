import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicRedux from "./pages/learning/BasicRedux/BasicRedux";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./helpers/PrivateRoutes";
import PublicRoute from "./helpers/PublicRoutes";

// import Login from "./pages/auth/Login/login";
import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/Home/Home";
import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";

import HomePage from "./pages/main/Home/HomePage";
import movieDetail from "./pages/main/Movie Detail/movieDetail";
import orderPage from "./pages/main/Order Page/orderPage";
import Payment from "./pages/main/Payment Page/Payment";
import paymentMethod from "./components/PaymentMethod/paymentMethod";
import Admin from "./pages/main/Admin Page/Admin";
import SignIn from "./pages/auth/Sign In/SignIn";
import Register from "./pages/auth/Register/Register";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute
              restricted={true}
              path="/login"
              exact
              component={SignIn}
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
            <Route path="/learning/basic-redux" exact component={BasicRedux} />
            <PrivateRoute path="/" exact component={HomePage} />
            <Route path="/movie-detail/:id" exact component={movieDetail} />
            <Route path="/order-page" exact component={orderPage} />
            <Route path="/payment" exact component={Payment} />
            <Route path="/payment-method" exact component={paymentMethod} />
            <Route path="/Admin" exact component={Admin} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
