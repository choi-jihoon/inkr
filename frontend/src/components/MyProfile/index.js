import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getMyProfile } from '../../store/profiles';

import './MyProfile.css';

const MyProfile = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);

    if (!sessionUser) {
        history.push('/');
    }

    const sessionProfile = useSelector(state => state.profile);
    const myProfile = sessionProfile[0];

    useEffect(() => {
        dispatch(getMyProfile(sessionUser.id))
    }, [dispatch])

    return (
        <div className='main-container my-profile-container'>
            <h2 className='my-profile-header'>Profile Settings</h2>
            <div className='my-profile'>
                {myProfile.fullName}
            </div>
        </div>
    )
}

export default MyProfile;
