// import { useState } from "react";
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider';
import { useEffect } from 'react';
const Nav = () => {
    const { isAuthenticated, user } = useAuth();
    let isAuth = isAuthenticated();
    

    return (
        <header>
        <h1><Link className="home" to="/">Fishing Blog</Link></h1>
        <nav>
            <Link to='/posts'>Posts</Link>
            <Link to='/blog'>Blog</Link>
            <div className='dropdown'>
                <Link to='/species'>Species</Link>
                <div className='dropdown-content'>
                    <Link to='/pike'>Pike</Link>
                    <Link to='/zander'>Zander</Link>
                    <Link to='/perch'>Perch</Link>
                </div>
            </div>
            <Link to='/about'>About</Link>
            {isAuth
            &&
            <div id="user">
            <Link to="/posts/create">Create Post</Link>
            <Link to='/myProfile'>My Profile</Link>
            <Link to="/logout">Logout</Link>
            </div> 
            }
            {!isAuth
            &&
            <div id="guest">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>           
            }
           
        </nav>
    </header>
  );
   
}
export default Nav;