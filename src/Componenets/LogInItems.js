import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Locations from "./locations";
import Products from "./products";

function LogInItems() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Navbar.Brand href="/">LogIn</Navbar.Brand>
          <Link className="mx-3" to="/products">
            Products
          </Link>
          <Link to="/locations">Locations</Link>
        </Navbar>
      </div>
      <Switch>
        <Route exact path="/products" component={Products} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </Router>
  );
}
export default LogInItems;
