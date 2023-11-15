import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmitLoginHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        if (!email || !password) {
            return alert('All fields are mandatory!!!');
        }
        console.log({email, password});
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