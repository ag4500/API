import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "./Componenets/RegisterForm";
import LogInForm from "./Componenets/LogInForm";
import Locations from "./Componenets/Locations";
import Products from "./Componenets/Products";
import Transaction from "./Componenets/Transaction";
import Families from "./Componenets/Families";
import ProtectedRouting from "./ProtetedRouting";
import PublicRouting from "./PublicRouting";
import Header from "./Header";
function Routes() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
            <PublicRouting component={LogInForm} />
          </Route>
          <Route exact path="/register">
            <PublicRouting component={RegisterForm} />
          </Route>
          <Route exact path="/products">
            <ProtectedRouting component={Products} />
          </Route>
          <Route exact path="/locations">
            <ProtectedRouting component={Locations} />
          </Route>
          <Route exact path="/transaction">
            <ProtectedRouting component={Transaction} />
          </Route>
          <Route exact path="/families">
            <ProtectedRouting component={Families} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default Routes;
