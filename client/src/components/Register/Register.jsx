import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();


    const onSubmitRegisterHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const rePassword = formData.get('rePassword');
        if (!email || !password || !rePassword) {
            return alert('All fields are mandatory!!!');
        }
        if (password !== rePassword) {
            return alert('Password and repeat password must be the same!!!');
        }
        console.log({username, email, password, rePassword});
        navigate('/login')
    }


   return (
    <>
        <div className="login-box">
  <h2>Register</h2>
  <form onSubmit={onSubmitRegisterHandler}>
    <div className="user-box">
      <input type="text" name="username" required="" onChange={(e) => setUsername(e.currentTarget)} />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="text" name="email" required="" onChange={(e) => setEmail(e.currentTarget)} />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password"  name="password" required="" onChange={(e) => setPassword(e.currentTarget)} />
      <label>Password</label>
    </div>
    <div className="user-box">
      <input type="password" name="rePassword" required="" onChange={(e) => setRePassword(e.currentTarget)} />
      <label>Repeat password</label>
    </div>
    <button className="btn-submit" type="submit">
        Submit
    </button>
  </form>
</div>
    </>
   )


}

export default Register;