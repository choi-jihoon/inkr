import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getMyProfile } from '../../store/profiles';
import EditMyProfileModal from '../EditMyProfileModal';

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
        <div className='main-container my-profile-container' id='my-profile-container'>
            <div className='title-container' id='my-profile-title-container'>
                <h2 className='my-profile-header'>My Profile</h2>
            </div>
            <div className='my-profile-content'>

                <div className='my-profile-image-div-container'>
                    <div className='my-profile-image-div'>
                        <img className='my-profile-image' src={myProfile?.profilePic} alt={`${myProfile?.User.username}'s profile`}></img>
                    </div>
                </div>
                <EditMyProfileModal myProfile={myProfile} />
                <div className='my-profile-content-container'>
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
                            <p className='my-profile-label'>Location: <span className='profile-location-text'>{myProfile?.location}</span></p>
                        </div>
                        <div className='my-profile-specialties'>
                            <p className='my-profile-label'>Specialties</p>
                            <p>{myProfile?.specialties && myProfile.specialties.join(', ')}</p>
                        </div>
                        <p className='my-profile-label'>About the artist</p>
                        <div className='my-profile-description'>
                            <p className='my-profile-description-text'>{myProfile?.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyProfile;
