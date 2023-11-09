import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const onSubmitRegisterHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePassword = formData.get('re-password');
        if (!email || !password || !rePassword) {
            return alert('All fields are mandatory!!!');
        }
        if (password !== rePassword) {
            return alert('Password and repeat password must be the same!!!');
        }
        console.log({email, password, rePassword});
    }


   return (
    <>
        <div id="wrapper">
            <section className="register-page">
                <h2>Register page</h2>
                <form className="register-form" onSubmit={onSubmitRegisterHandler}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                    <label htmlFor="re-password">Repeat password</label>
                    <input type="re-password" name="re-password" id="re-password" value={rePassword} onChange={(e) => setRePassword(e.currentTarget.value)} />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    </>
   )


}

export default Register;