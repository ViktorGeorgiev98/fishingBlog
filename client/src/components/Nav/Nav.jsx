// import { useState } from "react";
import { Link } from 'react-router-dom'
const Nav = () => {
    

    return (
        <nav className="navbar">
            <div className='container'>
            <div className='logo'>
                <Link to="/">Home</Link>
            </div>
            <div className='nav-elements'>
                <ul>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/myProfile">My Profile</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <div className="dropdown">
                    <Link to="/species">Species</Link>
                    <div className="dropdown-content">
                    <Link to="/pike">Pike</Link>
                    <Link to="/zander">Zander</Link>
                    <Link to="/perch">Perch</Link>
                    </div>
                    </div>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
                </ul>
            </div>

            </div>
        </nav>
  );
   
}
export default Nav;