import { User_Token, Set_User } from "../actions";
const initialState = {
  registeruser: {
    email: "",
    password: "",
  },
  responseApi:{token:"",status:"",isOpen:false}
};
export default function formReducers(state = initialState, action) {
  switch (action.type) {
    case User_Token:
     
      return {
        ...state,
        responseApi: action.payload,
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
