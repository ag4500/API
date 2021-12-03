import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Locations from "./locations";
import Products from "./products";
import TransactionComponent from "./transaction";
import FamiliesComponent from "./families";
import { userToken } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function LogInItems() {
  const history = useHistory();
  const dispatch = useDispatch();
  const OnClick = () => {
    let getToken = localStorage.removeItem("token");

    history.push("/login");
  };
  let getToken = localStorage.getItem("token");
  return (
    <>
      <Router>
        <div className="App">
          <Navbar>
            {" "}
            <>
              <Link className="mx-3" to="/products">
                Products
              </Link>
              <Link className="mx-3" to="/locations">Locations</Link>
              <Link className="mx-3" to="/transaction">Transaction</Link>
              <Link className="mx-3" to="/families">Families</Link>
              <button type="submit" onClick={OnClick}>
                LogOut
              </button>
            </>
          </Navbar>
        </div>
        <Switch>
          <>
            <Route exact path="/products" component={Products} />
            <Route path="/locations" component={Locations} />
            <Route path="/transaction" component={TransactionComponent} />
            <Route path="/families" component={FamiliesComponent} />
          </>
        </Switch>
      </Router>
    </>
  );
}
export default LogInItems;
