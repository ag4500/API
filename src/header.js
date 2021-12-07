import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import LogOut from "./Componenets/LogOut";
import { useSelector } from "react-redux";
function Header() {
  const token = useSelector((state) => state.authenticationReducer.token);
  return (
    <>
      <div className="App">
        <Navbar  bg="light" variant="light">
          <Container>
            {!token ? (
              <>
                <Navbar.Brand href="/">Form</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none",color: 'black' }}
                      className="mx-3"
                      to="/login"
                    >
                      LogIn Here
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none",color: 'black' }}
                      className="mx-3"
                      to="/register"
                    >
                      Register
                    </Link>
                  </Nav.Link>
                </Nav>
              </>
            ) : (
              <>
                <Navbar.Brand href="/">DashBoard</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none",color: 'black' }}
                      className="mx-3"
                      to="/products"
                    >
                      Product
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none",color: 'black' }}
                      className="mx-3"
                      to="/locations"
                    >
                      Location
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none",color: 'black' }}
                      className="mx-3"
                      to="/transaction"
                    >
                      Transaction
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none",color: 'black' }}
                      className="mx-3"
                      to="/families"
                    >
                      Families
                    </Link>
                  </Nav.Link>
                </Nav>
              </>
            )}
          </Container>
          {token ? <LogOut /> : null}
        </Navbar>
      </div>
    </>
  );
}
export default Header;
