import client from "./axios";
import {
  productItems,
  locationInfo,
  familiesData,
  transactionData,
} from "../actions";

let getToken = localStorage.getItem("token");

client.defaults.headers.common["Authorization"] = `Bearer ${getToken} `;
export const productData = () => async (dispatch) => {
  try {
    const response = await client.get("/products");
    dispatch(productItems(response.data));
  } catch (err) {
    console.log(err);
  }
};
export const familiesInfo = () => async (dispatch) => {
  try {
    const response = await client.get("/families");
    dispatch(familiesData(response.data));
  } catch (err) {
    console.log(err);
  }
};
export const transactionInfo = () => async (dispatch) => {
  try {
    const response = await client.get("/transactions");
    dispatch(transactionData(response.data));
  } catch (err) {
    console.log(err);
  }
};
export const locationData = () => async (dispatch) => {
  try {
    const response = await client.get("/locations");
    dispatch(locationInfo(response.data));
  } catch (err) {
    console.log(err);
  }
};
