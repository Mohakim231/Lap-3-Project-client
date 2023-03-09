import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './styles.css';
import { Post } from '../../components';

const NavBar = () => {
  const activeStyle = {
    textDecoration:'underline',
    color: '#17cf97'
  }

  const [showLinks, setShowLinks] = useState(true);
  const [showPost, setShowPost] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setShowLinks(false);
  }

  const handleButtonClick = () => {
    setShowLinks(true);
    setShowPost(false);
    navigate('/');
  }
  const handleCreateClick = () => {
    setShowPost(true);
  }

  const handleCancel = () => {
    setShowPost(false);
  }

  return (
    <>
      <nav>
        {showLinks ? (
          <>
            <h1 className='nav-heading'>Notes</h1>
            <ul className='nav-list'>
              <NavLink 
                to='/'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className='nav-links'
                aria-label='home page'
              >
                <li>
                  Home
                </li>
              </NavLink>
              <NavLink 
                to='/notes'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className='nav-links'
                onClick={handleLinkClick}
                aria-label='notes page'
              >
                <li>
                  Notes
                </li>
              </NavLink>
              <NavLink 
                to='/Public'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className='nav-links'
                onClick={handleLinkClick}
                aria-label="public notes page"
              >
                <li>
                  Public Notes
                </li>
              </NavLink>
              <NavLink 
                to='/forum'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className='nav-links'
                onClick={handleLinkClick}
                aria-label="forum page"
              >
                <li>
                  Forum
                </li>
              </NavLink>
            </ul>
          </>
        ) : (
          <div className='nav-menu-buttons'>
            <button className='nav-button' onClick={handleButtonClick} aria-label="back to menu">
              Back to menu
            </button>
            <button onClick={handleCreateClick} aria-label="create post">create</button>
          </div>
        )}
      </nav>
      {showPost && <Post handleCancel={handleCancel} />}
      <Outlet />
    </>
  )
}

export default NavBar;