import axios from "axios";
import { productItems, locationInfo } from "../actions";
const client = axios.create({
  baseURL: "http://localhost:8000/",
});
let getToken = localStorage.getItem("token") || "[]";
let parsetoken = JSON.parse(getToken);
parsetoken.map((data) => {
  client.defaults.headers.common["Authorization"] = `Bearer ${data.token} `;
});

export const productData = () => async (dispatch) => {
  try {
    const response = await client.get("/products");
    dispatch(productItems(response.data));
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
