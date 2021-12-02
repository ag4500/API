import axios from "axios";
import { userToken } from "../actions";
const client = axios.create({
  baseURL: "http://localhost:8000/",
});

export const addUserData = (user, history) => async (dispatch) => {
  try {
    const response = await client.post("auth/register", {
      ...user,
    });
    console.log(response);
    if (response.status == 200) {
      history.history.push("/login");
    }
    dispatch(userToken({ status: response.status }));
  } catch (err) {
    console.log(err);
  }
};
export const logInUserData = (logIn) => async (dispatch) => {
  const response = await client.post("auth/login", {
    ...logIn,
  });
  let tokenData = {
    token: response.data.access_token
  };
  let getToken = localStorage.getItem("token") || "[]";
  let parsetoken = JSON.parse(getToken);
  localStorage.setItem(
    "token",
    JSON.stringify(parsetoken.concat(tokenData))
  );
  
  dispatch(dispatch(userToken({ token: response.data.access_token ,isOpen:true})))
  
};
