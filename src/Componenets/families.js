import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { familiesInfo } from "../thunks/logItems";
import { useSelector, useDispatch } from "react-redux";
import Linking from "../link";
import SelectPagination  from './select'
const FamiliesComponent = (props) => {
  const dispatch = useDispatch();
  const family = useSelector((state) => state.ItemsReducers);
  useEffect(() => {
    dispatch(familiesInfo(family.filters));
    if (!localStorage.getItem('token')){
      props.history.push('/login')
    }
  }, [family.filters]);
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
    <SelectPagination/>
    </>
  );
};
export default FamiliesComponent;
