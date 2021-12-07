import { Get_Access_Token, Set_User } from "../actions";

const getItemOnLocalStorage = () => {
  let getToken = localStorage.getItem("token") || "";
  return getToken;
};
const initialState = {
  registeruser: {
    email: "",
    password: "",
  },
  token: getItemOnLocalStorage(),
};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case Get_Access_Token:
      return {
        ...state,
        token: action.payload,
      };
    case Set_User:
      return {
        ...state,
        registeruser: action.payload,
      };
    default:
      return state;
  }
}
