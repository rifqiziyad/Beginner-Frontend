import React from "react";
import { Route, Redirect } from "react-router-dom";

// ...rest = berisi path dan exact
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <Route
      {...rest} //patch = "..." exact component
      render={(props) =>
        // <Component {...props} /> = <BasicHome />
        // isAuthenticated = jika user sudah login
        // restricted = jika user sudah login, user tidak masuk ke haloman tersebut (true)
        isAuthenticated && restricted ? (
          <Redirect to="/learning/basic-home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
