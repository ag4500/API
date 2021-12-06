import { useHistory } from "react-router";
import { userToken } from "../actions";
import { useDispatch } from "react-redux";
const LogOut = () => {
  const history = useHistory();
  const dispatch=useDispatch()
  const handleClick = () => {
    let removeToken=localStorage.removeItem("token");
    //dispatch(userToken(removeToken))
    history.push("/login");
  };
  return (
    <button type="submit" onClick={handleClick}>
      LogOut
    </button>
  );
};
export default LogOut;
