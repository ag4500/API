import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import RegisterForm from "./Componenets/register";
import LogInForm from "./Componenets/LogInForm";
import Locations from "./Componenets/locations";
import Products from "./Componenets/products";
import TransactionComponent from "./Componenets/transaction";
import FamiliesComponent from "./Componenets/families";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Linking from "./link";
function Routing() {
  return (
    <>
      <Router>
        <Switch>
         <Route exact path="/" component={Linking} />
          <Route exact path="/login" component={LogInForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/products" component={Products} />
          <Route path="/locations" component={Locations} />
          <Route path="/transaction" component={TransactionComponent} />
          <Route path="/families" component={FamiliesComponent} />
         
        </Switch>
      </Router>
    </>
  );
}
export default Routing;
