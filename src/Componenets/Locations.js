import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { locationData } from "../thunks/pagesThunk";
import { useSelector, useDispatch } from "react-redux";
import SelectPagination from "./SelectPagination";
import { setLocationsFilters } from "../actions";
const Locations = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.pagesReducers.locations);
  const { records, filters } = location;
  useEffect(() => {
    console.log(filters)
    dispatch(locationData(filters));
  }, [dispatch,filters]);
  const setFilters = (nextFilters) => {
    dispatch(setLocationsFilters(nextFilters));
  };
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
          {records.length
            ? records.map((data) => (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                </tr>
              ))
            : "location"}
        </tbody>
      </Table>
      <SelectPagination filters={filters} setFilters={setFilters}/>
    </>
  );
};
export default Locations;
