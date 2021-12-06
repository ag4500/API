import { useHistory } from "react-router";
const LogOut = (props) => {
    const history = useHistory()

    const handleClick = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }
    return (
        <button type="submit" onClick={handleClick}>LogOut</button>
    )
}
export default LogOut;