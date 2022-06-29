import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
        <div class="navbar-start">
          <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li className='bg-accent text-white rounded'><a>Home</a></li>
            <li><a>Appointment</a></li>
            <li><a>Reviews</a></li>
            <li><a>Contact Us</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
      </div>   
    );
};

export default Navbar;