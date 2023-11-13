import { useState } from "react";
import { Link } from 'react-router-dom'
const Nav = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/myProfile">My Profile</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <div className="dropdown">
        <Link to="/species">Species</Link>
        <div className="dropdown-content">
          <Link to="/pike">Pike</Link>
          <Link to="/zander">Zander</Link>
          <Link to="/perch">Perch</Link>
        </div>
      </div>
      <Link to="/logout">Logout</Link>
    </nav>
  );
   
}
export default Nav;