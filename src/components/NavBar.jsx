import React from 'react';
import '../styles/NavBar.css';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
            <div className='navbar'>
                <h2>Another React Blog by K0D1NG K1DD</h2>
                <div className='navbar__list'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/AllPosts">Write Post</Link>
                        </li>
                        <li>
                            <Link to="/SignUp">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/LogIn">Log In</Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default NavBar;