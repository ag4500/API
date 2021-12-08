import {
  PRODUCTS_ITEM,
  LOCATION_INFO,
  FAMILIES_DATA,
  TRANSACTION_DATA,
  PRODUCT_ITEM_FILTERS,
  LOCATION_DATA_FILTERS,
  FAMILIES_DATA_FILTERS,
  TRANSACTION_DATA_FILTERS
} from "../actions";

const initialState = {
  products: { records: [], filters: { page: 1, limit: 10 } },
  locations: { records: [], filters: { page: 1, limit: 3} },
  families: { records: [], filters: { page: 1, limit: 3 } },
  transactions: { records: [], filters: { page: 1, limit: 3 } },
};

export default function pagesReducers(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_ITEM:
      return {
        ...state,
        products: {
          ...state.products,
          records: action.payload,
        },
      };
    case PRODUCT_ITEM_FILTERS:
      return {
        ...state,
        products: {
          ...state.products,
          filters: {
            ...state.products.filters,
            ...action.payload,
          },
        },
      };
    case LOCATION_INFO:
      return {
        ...state,
        locations: {
          ...state.locations,
          records: action.payload,
        },
      };
    case LOCATION_DATA_FILTERS:
      return {
        ...state,
        locations: {
          ...state.locations,
          filters: {
            ...state.locations.filters,
            ...action.payload,
          },
        },
      };

    case FAMILIES_DATA:
      return {
        ...state,
        families: {
          ...state.families,
          records: action.payload,
        },
      };
    case FAMILIES_DATA_FILTERS:
      return {
        ...state,
        families: {
          ...state.families,
          filters: {
            ...state.families.filters,
            ...action.payload,
          },
        },
      };
    case TRANSACTION_DATA:
      return {
        ...state,
        transactions: {
          ...state.transactions,
          records: action.payload,
        },
      };
    case TRANSACTION_DATA_FILTERS:
      return {
        ...state,
        transactions: {
          ...state.transactions,
          filters: {
            ...state.transactions.filters,
            ...action.payload,
          },
        },
      };
    default:
      return state;
  }
}
