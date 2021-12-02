import { Products_Item,Location_Info } from "../actions";
const initialState = {
  products: [],
  location:[]
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
    default:
      return state;
  }
}
