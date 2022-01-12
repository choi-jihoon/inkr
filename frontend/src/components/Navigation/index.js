import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import ImageFormModal from '../PostImageModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());

    history.push('/');
  };

  let sessionLinks;
  let centerLink;
  if (sessionUser) {
    sessionLinks = (
      <>
        {/* <ProfileButton user={sessionUser} /> */}
        {/* <li className='welcome-text'>Welcome, {sessionUser.username}!</li> */}
        <ImageFormModal />
        <button className='logout' onClick={logout}>Log Out</button>
      </>
    );

    centerLink = (
      <>
        <li className='nav-butt'><NavLink to='/my-portfolio'>Portfolio</NavLink></li>
        <li className='favorites-nav nav-butt'><NavLink to='/my-favorites'>Favorites</NavLink></li>
        <li className='nav-butt'><NavLink to='/my-profile'>Profile</NavLink></li>
      </>
    )

  } else {
    sessionLinks = (
      <>
        <li id='login'>
          <LoginFormModal />
        </li>
        <li id='signup'>
          <SignupFormModal />
        </li>
      </>
    );

    centerLink = (
      <>

      </>
    )
  }

  return (
    <header>
      <nav className='nav-bar'>
        <div className='navbar-element' id='left-container'>
          <NavLink exact to="/">
            <img className='inkr-dots' src='/images/black-and-white.png' alt='inkr dots' />
            <img className='inkr-logo' src='/images/logotype.svg' alt='inkr logo'></img>
          </NavLink>
        </div>

        <div className='navbar-element' id='center-container'>
          {isLoaded && centerLink}
        </div>

        <div className='navbar-element' id='right-container'>
          <ul className='session-links'>
            {isLoaded && sessionLinks}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
