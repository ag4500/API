import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { transactionInfo } from "../thunks/pagesThunk";
import SelectPagination from "./SelectPagination";
import { useSelector, useDispatch } from "react-redux";
import { setTransactionFilters } from "../actions";
const Transaction = () => {
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.pagesReducers.transactions);
  const { records, filters } = transaction;
  console.log(filters)
  useEffect(() => {
    dispatch(transactionInfo(filters));
  }, [dispatch,filters]);

  const setFilters = (nextFilters) => {
    dispatch(setTransactionFilters(nextFilters));
  };
  return (
    <>
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>ID</th>
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
                  <td>{data.cost}</td>
                  <td>{data.quantity}</td>
                  <td>{data.productId}</td>
                </tr>
              ))
            : "Transaction"}
        </tbody>
      </Table>
      <SelectPagination filters={filters} setFilters={setFilters} />
    </>
  );
};
export default Transaction;
