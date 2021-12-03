import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, NavLink, Nav, Container } from "react-bootstrap";
import RegisterForm from "./Componenets/register";
import LogInForm from "./Componenets/LogInForm";
import LogInItems from "./Componenets/LogInItems";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Routing() {
  let getToken = localStorage.getItem("token");
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">Form</Navbar.Brand>
            <Nav className="me-auto">
              <Link className="mx-3" to="/login">
                logIn
              </Link>
              <Link className="mx-3" to="/register">
                Register
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Switch>
        <Route exact path="/login" component={LogInForm} />
        <Route exact path="/register" component={RegisterForm} />

        <Route exact path="/dashboard" component={LogInItems} />
      </Switch>
    </Router>
  );
}
export default Routing;
