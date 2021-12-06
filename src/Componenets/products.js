import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { productData } from "../thunks/logItems";
import { useSelector, useDispatch } from "react-redux";
import Linking from "../link";
import SelectPagination from "./select";
const Products = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ItemsReducers);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      props.history.push("/login");
    } else {
      dispatch(productData(product.filters));
    }
  }, [product.filters]);
  return (
    <>
      <Linking />
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Quantity</th>
            <th> locationId</th>
          </tr>
        </thead>
        <tbody>
          {product
            ? product.products.map((data) => (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.cost}</td>
                  <td>{data.quantity}</td>
                  <td>{data.locationId}</td>
                </tr>
              ))
            : "Product"}
        </tbody>
      </Table>
      <SelectPagination />
    </>
  );
};
export default Products;
