import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { productData } from "../thunks/pagesThunk";
import { useSelector, useDispatch } from "react-redux";
import SelectPagination from "./SelectPagination";

import { setProductsFilters } from "../actions";
const Products = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.pagesReducers.products);
  const { records, filters } = product;
  useEffect(() => {
    dispatch(productData(filters));
  }, [dispatch,filters]);

  const setFilters = (nextFilters) => {
    dispatch(setProductsFilters(nextFilters));
  };
  return (
    <>
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
          {records.length
            ? records.map((data) => (
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
      <SelectPagination filters={filters} setFilters={setFilters} />
    </>
  );
};
export default Products;
