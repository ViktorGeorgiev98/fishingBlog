import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const AuthGuard = (props) => {
    const { isAuthenticated } = useAuth();
    

    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    return (
        <Outlet />
    )
}


export default AuthGuard;