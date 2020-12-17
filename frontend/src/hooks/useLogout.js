import { useRecoilState } from "recoil";
import { loggedInUser } from "../store/state";


const useLogout = () => {
    const [loggedUser, setLoggedUser] = useRecoilState(loggedInUser);

    const logout = () => {
        setLoggedUser(null);
        localStorage.clear()
    }
    return {
        loggedUser,
        logout
    }
}
export default useLogout;