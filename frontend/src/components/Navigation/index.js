import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to='/my-portfolio'>My Portfolio</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
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
  }

  return (
    <header>
      <nav className='nav-bar'>
        <div className='navbar-element' id='left-container'>
          <NavLink exact to="/">
            <img className='inkr-dots' src='/images/black-and-white.png' alt='inkr dots'></img>
            <img className='inkr-logo' src='/images/logotype.svg' alt='inkr logo'></img>
          </NavLink>
        </div>

        <div className='navbar-element' id='center-container'>
          maybe a search bar here
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
