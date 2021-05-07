import React from "react";
import { Route, Redirect } from "react-router-dom";

// ...rest = berisi path dan exact
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <Route
      {...rest} //patch = "..." exact component
      render={(props) =>
        // <Component {...props} /> = <BasicHome />
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
