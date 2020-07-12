import React from "react";
import { Route, Redirect } from "react-router-dom";
const Public = ({ component: Component, ...rest }) => {
  const userLogged = true;
  if (userLogged) {
    return <Redirect to="/" />;
  } else {
    return (
      <>
        <Route {...rest} component={Component} />
      </>
    );
  }
};

export default Public;