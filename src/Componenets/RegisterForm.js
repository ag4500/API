import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { setUser } from "../actions";
import { requestRegisterUser } from "../thunks/authenticationThunk";
import { useSelector, useDispatch } from "react-redux";

const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.authenticationReducer);
  const { email, password } = users.registeruser;

  const onChange = (e) => {
    const { name, value } = e.target;
    const addusers = { ...users.registeruser, [name]: value };
    dispatch(setUser(addusers));
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    if (users.registeruser.email.trim() && users.registeruser.password.trim()) {
      return alert("Please Enter Valid Credentials");
    }
    dispatch(requestRegisterUser(users.registeruser, props.history));
  };

  return (
    <>
      <Form onSubmit={OnSubmit} className="container my-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(event) => onChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => onChange(event)}
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};
export default RegisterForm;
