import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getMyProfile } from '../../store/profiles';

import './MyProfile.css';

const MyProfile = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const sessionProfile = useSelector(state => state.profile);
    const myProfile = sessionProfile[0];

    if (!sessionUser) {
        history.push('/');
    }

    useEffect(() => {
        dispatch(getMyProfile(sessionUser.id))
    }, [dispatch])

    return (
        <div className='main-container my-profile-container'>
            <h2 className='my-profile-header'>My Profile</h2>
            <div className='my-profile-content'>

                <div className='my-profile-image-div-container'>
                    <div className='my-profile-image-div'>
                        <img className='my-profile-image' src={myProfile?.profilePic} alt={`${myProfile?.User.username}'s profile`}></img>
                    </div>
                </div>
                <div className='my-profile'>
                    <div className='my-profile-fullName'>
                        <h4>
                            {myProfile?.fullName}
                        </h4>
                    </div>
                    <div className='my-profile-username'>
                        {myProfile?.User.username}
                    </div>
                    <div className='my-profile-location'>
                        Location: {myProfile?.location}
                    </div>
                    <div className='my-profile-specialties'>
                        Specialties: {myProfile?.specialties}
                    </div>
                    <div className='my-profile-description'>
                        About the artist: {myProfile?.description}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyProfile;
