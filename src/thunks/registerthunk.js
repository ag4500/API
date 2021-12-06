import client from "./axios";
import { userToken } from "../actions";
export const addUserData = (user, props) => async () => {
  try {
    const response = await client.post("auth/register", {
      ...user,
    });
    props.history.push("/login");
  } catch (err) {
    console.log(err);
  }
};
export const logInUserData = (logIn) => async (dispatch) => {
  try {
    const response = await client.post("auth/login", {
      ...logIn,
    });
    dispatch(userToken(response.data.access_token));
   
  } catch (err) {
    console.log(err);
  }
};
