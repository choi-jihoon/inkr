import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './MyProfile.css';

const MyProfile = () => {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) {
        history.push('/');
    }

    return (
        <div className='main-container my-profile-container'>
            <h2 className='my-profile-header'>Profile Settings</h2>
        </div>
    )
}

export default MyProfile;
