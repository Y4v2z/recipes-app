import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

const Navbar = () => {
    const { color } = useContext(ThemeContext)
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-${color}`} >
            <div className="container">
                <Link className='navbar-brand' to="/">Recipes</Link>
                <ul className='navbar-nav me-auto' >
                    <li className='nav-item' >
                        <NavLink className="nav-link" to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/create" >Create</NavLink>
                    </li>
                </ul>
                <SearchBar />
            </div>
        </nav>
    )
}

export default Navbar