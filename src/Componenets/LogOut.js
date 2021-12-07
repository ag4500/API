import { Button } from "react-bootstrap";
const LogOut = () => {
  const handleClick = () => {
   localStorage.removeItem("token");
    window.location.reload()
  };
  return (
    <Button type="submit" variant="danger" style={{ marginRight:'50px'}} onClick={handleClick}>
      LogOut
    </Button>
  );
};
export default LogOut;
