import {
  Products_Item,
  Location_Info,
  Families,
  Transaction,
  Set_Filter,
} from "../actions";

const initialState = {
  products: [],
  location: [],
  families: [],
  transaction: [],
  filters: { page: 1, limit: 10 },
};

export default function pagesReducers(state = initialState, action) {
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
    case Set_Filter:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
}
