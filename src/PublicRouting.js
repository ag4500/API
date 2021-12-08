import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
const PublicRouting = ({ component: Component }) => {
  const authToken = useSelector((state) => state.authenticationReducer.token);
  return (
    <Route
      render={(props) =>
        !authToken ? <Component {...props} /> : <Redirect to="/products" />
      }
    />
  );
};
export default PublicRouting;
