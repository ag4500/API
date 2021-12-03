import {
  Products_Item,
  Location_Info,
  Families,
  Transaction,
} from "../actions";
const initialState = {
  products: [],
  location: [],
  families: [],
  transaction: [],
};
export default function ItemsReducers(state = initialState, action) {
  switch (action.type) {
    case Products_Item:
      return {
        ...state,
        products: action.payload,
      };
    case Location_Info:
      return {
        ...state,
        location: action.payload,
      };
    case Families:
      return {
        ...state,
        families: action.payload,
      };
    case Transaction:
      return {
        ...state,
        transaction: action.payload,
      };
    default:
      return state;
  }
}
