import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getArtistProfile } from '../../store/artist';
import './ArtistPortfolioProfile.css';

function ArtistPortfolioProfile({ artistId }) {
    const dispatch = useDispatch();

    const artistProfile = useSelector(state => state.artist.artistProfile);


    useEffect(() => {
        dispatch(getArtistProfile(artistId));
    }, [dispatch, artistId])


    return (
        <div className='artist-portfolio-profile'>
            <div className='my-profile-content'>
                <div className='my-profile-image-div-container'>
                    <div className='my-profile-image-div'>
                        <img className='my-profile-image' src={artistProfile?.profilePic} alt={`${artistProfile?.User.username}'s profile`}></img>
                    </div>
                </div>
                <div className='my-profile-content-container'>
                    <div className='my-profile'>
                        <div className='my-profile-fullName'>
                            <h4>
                                {artistProfile?.fullName}
                            </h4>
                        </div>
                        <div className='my-profile-username'>
                            {artistProfile?.User.username}
                        </div>
                        <div className='my-profile-location'>
                            <p className='my-profile-label'>Location: <span className='profile-location-text'>{artistProfile?.location}</span></p>
                        </div>
                        <div className='my-profile-specialties'>
                            <p className='my-profile-label'>Specialties</p>
                            <p>{artistProfile.specialties ? artistProfile?.specialties.join(', ') : ''}</p>
                        </div>
                        <p className='my-profile-label'>About the artist</p>
                        <div className='my-profile-description'>
                            <p className='my-profile-description-text'>{artistProfile?.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default ArtistPortfolioProfile;
