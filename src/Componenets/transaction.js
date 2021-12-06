import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { transactionInfo } from "../thunks/logItems";
import Linking from "../link";
import { useSelector, useDispatch } from "react-redux";
const TransactionComponent = () => {
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.ItemsReducers);
  useEffect(() => {
    dispatch(transactionInfo());
  }, [dispatch]);
  return (
    <>
    <Linking/>
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
        {transaction
          ? transaction.transaction.map((data) => (
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
    </>
  );

};
export default TransactionComponent;
