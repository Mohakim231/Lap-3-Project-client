import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  const activeStyle = {
    textDecoration:'underline',
    color: '#17cf97'
  }

  return (
    <>
    <nav>
      <h1 className='nav-heading'>Notes</h1>
      <ul className='nav-list'>
        <NavLink 
          to='/'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='nav-links'
        >
          <li>
            Home
          </li>
        </NavLink>
        <NavLink 
          to='/create'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='nav-links'
        >
          <li>
            Create
          </li>
        </NavLink>
        <NavLink 
          to='/Public'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='nav-links'
        >
          <li>
            Public Notes
          </li>
        </NavLink>
        <NavLink 
          to='/forum'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='nav-links'
        >
          <li>
            Forum
          </li>
        </NavLink>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default NavBar