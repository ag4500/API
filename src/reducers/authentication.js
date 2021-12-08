import { GET_ACCESS_TOKEN , SET_USER } from "../actions";

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
    case GET_ACCESS_TOKEN :
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        registeruser: action.payload,
      };
    default:
      return state;
  }
}
