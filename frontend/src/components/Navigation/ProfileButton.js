import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());

    history.push('/');
  };

  return (
    <>
      <li className='welcome-text'>Welcome, {user.username}!</li>
      <button className='menu-icon' onClick={openMenu}>
        <i className="fas fa-bars" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li><NavLink to='/my-portfolio'>My Portfolio</NavLink></li>
          <li>Favorites</li>
          <li>Settings</li>
          <li>
            <button className='logout' onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
