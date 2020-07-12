import React from "react";
import { Route, Redirect } from "react-router-dom";
const Protected = ({ component: Component, ...rest }) => {
  const userLogged = true;
  if (!userLogged) {
    return <Redirect to="/login" />;
  } else {
    return (
      <>
        <Route {...rest} component={Component} />
      </>
    );
  }
};

export default Protected;