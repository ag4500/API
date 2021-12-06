import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { locationData } from "../thunks/logItems";
import { useSelector, useDispatch } from "react-redux";
import Linking from "../link";
const Locations = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ItemsReducers);
  useEffect(() => {
    dispatch(locationData());
    if (!localStorage.getItem('token')){
      props.history.push('/login')
    }
  }, [dispatch]);
  return (
    <>
    <Linking/>
    <Table striped bordered hover size="lg">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data
          ? data.location.map((data) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
              </tr>
            ))
          : "location"}
      </tbody>
    </Table>
    </>
  );
};
export default Locations;
