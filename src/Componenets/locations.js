import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { locationData } from "../thunks/PagesThunk";
import { useSelector, useDispatch } from "react-redux";
import SelectPagination from "./select";
const Locations = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pagesReducers);
  
  useEffect(() => {
    dispatch(locationData(data.filters));
  }, [data.filters]);
  return (
    <>
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
      <SelectPagination />
    </>
  );
};
export default Locations;
