import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import ImageFormModal from '../ImageFormModal';
import SearchForm from '../Search/SearchForm.js';
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
        <SearchForm />
        {/* <li className='welcome-text'>Welcome, {sessionUser.username}!</li> */}
        <ImageFormModal />
        <button className='logout right-container-element' onClick={logout}><i className="fas fa-sign-out-alt"></i></button>
      </>
    );

    centerLink = (
      <>
        <li className='nav-butt'><NavLink activeClassName='active-link' exact to='/'>Discover</NavLink></li>
        <li className='nav-butt'><NavLink activeClassName='active-link' to={`/artists/${sessionUser.id}`}>My Page</NavLink></li>
        <li className='nav-butt'><NavLink activeClassName='active-link' to='/my-profile'>Profile</NavLink></li>
        <li className='nav-butt'><NavLink activeClassName='active-link' to='/my-portfolio'>Portfolio</NavLink></li>
        <li className='favorites-nav nav-butt'><NavLink activeClassName='active-link' to='/my-favorites'>Favorites</NavLink></li>
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
    <header id={!sessionUser && 'splash-page-header'}>
      <nav className='nav-bar' id={!sessionUser && 'splash-page-nav-bar'}>
        <div className='navbar-element' id='left-container'>
          <NavLink exact to="/">
            <img className='inkr-dots' src='/images/black-and-white.png' alt='inkr dots' />
            <img className='inkr-logo' src='/images/logotype.svg' alt='inkr logo'></img>
          </NavLink>
        </div>

        <div className='navbar-element' id='center-container'>
          <ul className='session-links'>
            {isLoaded && centerLink}
          </ul>
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
