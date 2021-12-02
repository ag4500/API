import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import RegisterForm from "./Componenets/register";
import LogInForm from "./Componenets/LogInForm";
import LogInItems from "./Componenets/LogInItems";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Routing() {
  const data = useSelector((state) => state.formReducers);
  console.log(data);
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">Form</Navbar.Brand>
            <Nav className="me-auto">
              {data.responseApi.status == 200 ? (
                <Link to="/login">LogIn</Link>
              ) : (
                <Link className="mx-3" to="/register">
                  Register
                </Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Switch>
        {data.responseApi.status == 200 ? (
          <Route path="/login" component={LogInForm} />
        ) : (
          <Route exact path="/register" component={RegisterForm} />
        )}
        {data.responseApi.isOpen ? (
          <LogInItems />
        ) : (
          "please LogIn"
        )}
      </Switch>
    </Router>
  );
}
export default Routing;
