import { Link } from "react-router-dom";
import { Navbar, NavLink, Nav, Container } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LogOut from "./Componenets/LogOut";
import { useSelector} from "react-redux";
function Linking() {
  const getTokenReducer = useSelector((state) => state.formReducers);
  let getToken = localStorage.getItem("token");
  return (
    <>
      <div className="App">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">Form</Navbar.Brand>
            <Nav className="me-auto">
              {!getToken ? (
                <>
                  <Link className="mx-3" to="/login">
                    logIn
                  </Link>
                  <Link className="mx-3" to="/register">
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link className="mx-3" to="/products">
                    Products
                  </Link>
                  <Link className="mx-3" to="/locations">
                    Locations
                  </Link>
                  <Link className="mx-3" to="/transaction">
                    Transaction
                  </Link>
                  <Link className="mx-3" to="/families">
                    Families
                  </Link>
                </>
              )}
            </Nav>
          </Container>
          {getToken ? <LogOut /> : null}
        </Navbar>
      </div>
    </>
  );
}
export default Linking;
