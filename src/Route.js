import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "./Componenets/register";
import LogInForm from "./Componenets/LogInForm";
import Locations from "./Componenets/locations";
import Products from "./Componenets/products";
import TransactionComponent from "./Componenets/transaction";
import FamiliesComponent from "./Componenets/families";
import ProtectedRouting from "./protected";
import PublicRouting from "./public";
import Header from "./header";
function Routing() {
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
            <ProtectedRouting component={TransactionComponent} />
          </Route>
          <Route exact path="/families">
            <ProtectedRouting component={FamiliesComponent} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default Routing;
