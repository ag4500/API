import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { setUser } from "../actions";
import { logInUserData } from "../thunks/registerthunk";
import { useSelector, useDispatch } from "react-redux";
import Linking from "../link";
const LogInForm = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.formReducers);
  const { email, password } = users.registeruser;
  const onChange = (e) => {
    const { name, value } = e.target;
    const addusers = { ...users.registeruser, [name]: value };
    dispatch(setUser(addusers));
  };
  const OnSubmit = async (e) => {
    e.preventDefault();
    if (
      users.registeruser.email.trim() == "" &&
      users.registeruser.password.trim() == ""
    ) {
      alert("Email and Password should not be empty");
    } else {
      dispatch(logInUserData(users.registeruser));
      props.history.push('/')

    }
  };
  return (
    <>
      <Linking />
      <Form onSubmit={OnSubmit} className="container">
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
          LogIn
        </Button>
      </Form>
    </>
  );
};
export default LogInForm;
