import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/Home/Home";
import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";
import HomePage from "./pages/main/Home/HomePage";
import movieDetail from "./pages/main/Movie Detail/movieDetail";

import orderPage from "./pages/main/Order Page/orderPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/learning/basic-react" exact component={BasicReact} />
          <Route path="/learning/basic-home" exact component={BasicHome} />
          <Route
            path="/learning/basic-movie-detail/:id"
            exact
            component={BasicMovieDetail}
          />
          {/* ============================================ */}
          <Route path="/" exact component={HomePage} />
          <Route path="/movie-detail" exact component={movieDetail} />
          <Route path="/order-page" exact component={orderPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
