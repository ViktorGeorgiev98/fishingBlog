import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { useAuth } from "../../context/AuthProvider";

const Login = () => {
    const { user, login, logout, isAuthenticated, getAccessToken } = useAuth(); // mitaka981@abv.bg // 12345
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmitLoginHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        if (!email || !password) {
            return alert('All fields are mandatory!!!');
        }
        console.log({email, password});
        
        try {
          const response = await fetch("http://localhost:3030/users/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
          });
        
          if (response.ok) {
            const data = await response.json();
            login(data);
          } else {
            throw new Error(response.statusText);
          }
        } catch (e) {
          console.log(e.message);
          return alert(e.message);
        }
        navigate('/');
    }

    return (
        <>
            <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={onSubmitLoginHandler}>
        <div className="user-box">
          <input type="text" name="email" required="" onChange={(e) => setEmail(e.currentTarget)} />
          <label htmlFor="email">Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required="" onChange={(e) => setPassword(e.currentTarget)} />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn-submit" type="submit">
            Submit
        </button>
      </form>
    </div>
        </>
       )
}

export default Login;