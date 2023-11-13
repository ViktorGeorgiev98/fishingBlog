import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitLoginHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        if (!email || !password) {
            return alert('All fields are mandatory!!!');
        }
        console.log({email, password});
    }

    return (
        <>
            <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={onSubmitLoginHandler}>
        <div className="user-box">
          <input type="text" name="email" required="" onChange={(e) => setEmail(e.currentTarget)} />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required="" onChange={(e) => setPassword(e.currentTarget)} />
          <label>Password</label>
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