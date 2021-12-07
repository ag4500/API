import client from "./axios";
import { getAccessToken } from "../actions";
export const registerUser = (user, props) => async () => {
  try {
    await client.post("auth/register", {
      ...user,
    });
    props.history.push("/login");
  } catch (err) {
    alert(err);
  }
};
export const logInUser = (logIn) => async (dispatch) => {
  try {
    const response = await client.post("auth/login", {
      ...logIn,
    });
    localStorage.setItem("token", response.data.access_token);
    client.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.access_token}`;
    dispatch(getAccessToken(response.data.access_token));
  } catch (err) {
    alert(err);
  }
};
