import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const GuestGuard = (props) => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated()) {
        return <Navigate to="/" />
    }

    return (
        <Outlet />
    )
}

export default GuestGuard;