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
        history.push('/page-not-found');
    }

    useEffect(() => {
        dispatch(getMyProfile(sessionUser.id))
    }, [dispatch, sessionUser.id])

    return (
        <div className='main-container my-profile-container'
            id='my-profile-container'>
            <div className='title-container'
                id='my-profile-title-container'>
                <h2 className='my-profile-header'>My Profile</h2>
            </div>
            <div className='my-profile-content'>

                <div className='image-and-name'>
                    <div className='my-profile-image-div-container'>
                        <div className='my-profile-image-div'>
                            <img className='my-profile-image'
                                src={myProfile?.profilePic}
                                alt={`${myProfile?.User.username}'s profile`}></img>
                        </div>
                    </div>
                    <div className='my-profile-username'>
                        {myProfile?.User.username}
                    </div>

                </div>
                <EditMyProfileModal myProfile={myProfile} />
                <div className='my-profile-content-container'>
                    <div className='my-profile'>
                        <div className='my-profile-name-container profile-info'>
                            <div id='artist-profile-username'>
                                <p className='artist-profile-label'>
                                    Full Name: <span className='profile-location-text'>{myProfile?.fullName}</span>
                                </p>
                            </div>
                        </div>
                        <div className='my-profile-location profile-info'>
                            <p className='artist-profile-label'>
                                Location: <span className='profile-location-text'>{myProfile?.location}</span>
                            </p>
                        </div>
                        <div className='my-profile-specialties profile-info'>
                            <p className='artist-profile-label'>Specialties</p>
                            <p className='artist-profile-text'>{myProfile?.specialties && myProfile.specialties.join(', ')}</p>
                        </div>
                        <div className='my-profile-description-container profile-info'>
                            <p className='artist-profile-label'>About the artist</p>
                            <div className='my-profile-description'>
                                <p className='artist-profile-text'>{myProfile?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;
