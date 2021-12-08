import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { familiesInfo } from "../thunks/pagesThunk";
import { useSelector, useDispatch } from "react-redux";
import SelectPagination from "./SelectPagination";
import { setFamiliesFilters } from "../actions";
const Families = () => {
  const dispatch = useDispatch();
  const family = useSelector((state) => state.pagesReducers.families);
  const {records,filters}=family
  useEffect(() => {
    dispatch(familiesInfo(filters));
  }, [dispatch,filters]);
  const setFilters = (nextFilters) => {
    dispatch(setFamiliesFilters(nextFilters));
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
            : "Family"}
        </tbody>
      </Table>
      <SelectPagination filters={filters} setFilters={setFilters}/>
    </>
  );
};
export default Families;
