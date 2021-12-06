import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { setUser } from "../actions";
import { addUserData } from "../thunks/registerthunk";
import { useSelector, useDispatch } from "react-redux";
import Linking from "../link";
const RegisterForm = (history) => {
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
    users.registeruser.email.trim() == "" &&
    users.registeruser.password.trim() == ""
      ? alert("Please Enter Valid Credentials")
      : dispatch(addUserData(users.registeruser, history));
  };
  return (
    <>
    <Linking/>
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
        Submit
      </Button>
    </Form>
    </>
  );
};
export default RegisterForm;
