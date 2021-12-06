import { User_Token, Set_User } from "../actions";
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
const setItemOnLocalStorage = (token) => {
  localStorage.setItem("token", token);
};
export default function formReducers(state = initialState, action) {
  switch (action.type) {
     case User_Token:
    const token=setItemOnLocalStorage(action.payload)
      return {
        ...state,
        token,
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
