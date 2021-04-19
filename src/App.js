import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/Home/Home";
import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";
import HomePage from "./pages/main/Home/HomePage";
import movieDetail from "./pages/main/Movie Detail/movieDetail";

import Payment from "./pages/main/Payment/payment";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/learning/basic-react" exact component={BasicReact} />
          <Route path="/learning/basic-home" exact component={BasicHome} />
          <Route
            path="/learning/basic-movie-detail"
            exact
            component={BasicMovieDetail}
          />
          {/* ============================================ */}
          <Route path="/" exact component={HomePage} />
          <Route path="/movie-detail" exact component={movieDetail} />
          <Route path="/payment" exact component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
