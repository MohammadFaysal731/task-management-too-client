import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItem = <>
        <li><Link to='/completedtasks'>Completed Tasks</Link></li>
        <li><Link to='/todo'>To-Do</Link></li>
        <li><Link to='/calendar'>calendar</Link></li>
    </>
    return (
        <div class="navbar bg-primary text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <h1 class="text-xl">Task Management Tool</h1>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal mx-5">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Header;