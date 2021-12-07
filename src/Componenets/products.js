import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { productData } from "../thunks/PagesThunk";
import { useSelector, useDispatch } from "react-redux";
import SelectPagination from "./select";
const Products = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.pagesReducers);

  useEffect(() => {
    dispatch(productData(product.filters));
  }, [product.filters]);

  return (
    <>
      <Table striped bordered hover size="lg" >
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
