import React from 'react';
import { useSelector } from 'react-redux';

import SplashPage from '../SplashPage';
import UserHomePage from '../UserHomePage';

import './MainView.css';

export default function MainView() {
    const sessionUser = useSelector(state => state.session.user);

    let sessionView;
    if (sessionUser) {
        sessionView = (
            <UserHomePage user={sessionUser} />
        );
    } else {
        sessionView = (
            <SplashPage />
        )
    }


    return (
        <div>
            {sessionView}
        </div>
    )
}
