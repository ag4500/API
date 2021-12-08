export const GET_ACCESS_TOKEN = "GET_ACCESS_TOKEN ";
export const SET_USER = "SET_USER";
export const PRODUCTS_ITEM = "PRODUCTS_ITEM";
export const LOCATION_INFO = "LOCATION_INFO";
export const FAMILIES_DATA = "FAMILIES_DATA";
export const TRANSACTION_DATA = "TRANSACTION_DATA";

export const PRODUCT_ITEM_FILTERS = "PRODUCT_ITEM_FILTERS";
export const LOCATION_DATA_FILTERS = "LOCATION_DATA_FILTERS";
export const FAMILIES_DATA_FILTERS = "FAMILIES_DATA_FILTERS";
export const TRANSACTION_DATA_FILTERS = "TRANSACTION_DATA_FILTERS";

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const getAccessToken = (payload) => ({
  type: GET_ACCESS_TOKEN,
  payload,
});

export const productItems = (payload) => ({
  type: PRODUCTS_ITEM,
  payload,
});

export const locationInfo = (payload) => ({
  type: LOCATION_INFO,
  payload,
});

export const familiesData = (payload) => ({
  type: FAMILIES_DATA,
  payload,
});

export const transactionData = (payload) => ({
  type: TRANSACTION_DATA,
  payload,
});

export const setProductsFilters = (payload) => ({
  type: PRODUCT_ITEM_FILTERS,
  payload,
});
export const setLocationsFilters = (payload) => ({
  type: LOCATION_DATA_FILTERS,
  payload,
});
export const setFamiliesFilters = (payload) => ({
  type: FAMILIES_DATA_FILTERS,
  payload,
});
export const setTransactionFilters = (payload) => ({
  type: TRANSACTION_DATA_FILTERS,
  payload,
});
