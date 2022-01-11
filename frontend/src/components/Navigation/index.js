import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import ImageFormModal from '../PostImageModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  let centerLink;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );

    centerLink = (
      <>
        <ImageFormModal />
        {/* <NavLink to='/my-favorites'><div className='favorites-nav nav-butt'>Favorites</div></NavLink> */}
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
