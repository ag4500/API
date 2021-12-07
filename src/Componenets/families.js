import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { familiesInfo } from "../thunks/PagesThunk";
import { useSelector, useDispatch } from "react-redux";
import SelectPagination from "./select";
const FamiliesComponent = () => {
  const dispatch = useDispatch();
  const family = useSelector((state) => state.pagesReducers);

  useEffect(() => {
    dispatch(familiesInfo(family.filters));
  }, [family.filters]);

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
          {family
            ? family.families.map((data) => (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                </tr>
              ))
            : "Family"}
        </tbody>
      </Table>
      <SelectPagination />
    </>
  );
};
export default FamiliesComponent;
