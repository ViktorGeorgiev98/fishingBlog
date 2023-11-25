import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useEffect } from "react";

const Logout =  () => {
    const navigate = useNavigate();
    const { logout, getAccessToken } = useAuth();
    const url = "http://localhost:3030/users/logout";
    const accessToken = getAccessToken();
    console.log({token: accessToken});
    useEffect( () => {
        const performLogout = async () => {
            try {
              const response = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-Authorization": accessToken,
                },
              });
              if (response.status === 204) {
                logout();
                navigate("/");
              } else if (response.status === 200) {
                return;
              } else {
                throw new Error(response.statusText);
              }
            } catch (e) {
              console.log(e.message);
              return alert(e.message);
            }
          };
      
          performLogout();
    }, []);
   
}

export default Logout;