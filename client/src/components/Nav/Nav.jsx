import { useState } from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="nav">
            <Link to='/'>Home</Link>
            <ul>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to='/myProfile'>My profile</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                
                 {/* Dropdown */}
                 <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <Link to='/species'>Species</Link>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/pike">Pike</Link>
            <Link to="/zander">Zander</Link>
            <Link to="/perch">Perch</Link>
          </div>
        )}
      </li>
            
                <li>
                    <Link to='/logout'>Logout</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Nav;