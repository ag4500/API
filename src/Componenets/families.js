import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { familiesInfo } from "../thunks/logItems";
import { useSelector, useDispatch } from "react-redux";
const FamiliesComponent = () => {
  const dispatch = useDispatch();
  const family = useSelector((state) => state.ItemsReducers);
  useEffect(() => {
    dispatch(familiesInfo());
  }, [dispatch]);

  return (
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
  );
};
export default FamiliesComponent;
