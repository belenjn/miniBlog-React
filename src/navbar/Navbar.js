import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>The Belen's Blog</h1>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
    </nav>
  )
}
