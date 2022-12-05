import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='my-3'>
            <ul className='navbar-center flex gap-5 justify-center items-center'>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/table'>Attendance Table</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
