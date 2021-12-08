import React from "react";
import { useSelector} from "react-redux";
import { Redirect, Route } from "react-router-dom";
const ProtectedRouting=({ component: Component})=>{
  const authToken=useSelector((state)=>state.authenticationReducer.token)
  return (
    <Route
      render={(props) =>
        authToken? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
export default ProtectedRouting


