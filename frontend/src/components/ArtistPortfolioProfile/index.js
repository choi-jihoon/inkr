import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getArtistProfile } from '../../store/artist';
import './ArtistPortfolioProfile.css';

function ArtistPortfolioProfile({ artistId }) {
    const dispatch = useDispatch();

    const sessionArtist = useSelector(state => state.artist);
    const artistProfileLoaded = Object.values(sessionArtist.artistProfile);
    const artistProfile = sessionArtist.artistProfile;

    useEffect(() => {
        dispatch(getArtistProfile(artistId));
    }, [dispatch, artistId])


    return (
        <div className='artist-portfolio-profile'>
            {artistProfileLoaded &&
                <div id='artist-profile-content'>
                    <div className='image-name-container'>
                        {+artistId === 3 ? (
                            <>
                                <a target="_blank" rel="noreferrer noopener"
                                    href='https://www.linkedin.com/in/jihoon-choi-a6967a221/'>
                                    <div className='my-profile-image-div-container' id='fiona-profile-image-div-container'>
                                        <div className='my-profile-image-div' id='artist-profile-image-div'>
                                            <img className='my-profile-image' src={artistProfile?.profilePic} alt={`${artistProfile?.User?.username}'s profile`}></img>
                                        </div>
                                    </div>
                                </a>
                            </>
                        ) : (
                            <>
                                <div className='my-profile-image-div-container' id='fiona-profile-image-div-container'>
                                    <div className='my-profile-image-div' id='artist-profile-image-div'>
                                        <img className='my-profile-image' src={artistProfile?.profilePic} alt={`${artistProfile?.User?.username}'s profile`}></img>
                                    </div>
                                </div>
                            </>)
                        }
                        <div id='artist-name-container'>
                            <div id='artist-profile-fullName'>
                                {artistProfile?.fullName}
                            </div>
                            <div id='artist-profile-username'>
                                {artistProfile?.User?.username}
                            </div>
                        </div>
                    </div>
                    <div className='artist-profile-content-container'>
                        <div className='artist-profile'>
                            <div id='artist-email'>
                                <p className='artist-profile-label'>Contact: <span className='profile-location-text'>{artistProfile?.User?.email}</span></p>
                            </div>
                            <div className='artist-profile-location'>
                                <p className='artist-profile-label'>Location: <span className='profile-location-text'>{artistProfile?.location}</span></p>
                            </div>
                            <div className='artist-profile-specialties'>
                                <p className='artist-profile-label'>Specialties</p>
                                <p className='artist-profile-text'>{artistProfile?.specialties ? artistProfile?.specialties.join(', ') : ''}</p>
                            </div>
                            <div className='artist-profile-description-container'>
                                {+artistId === 3 ?
                                    <p className='artist-profile-label'>About the Developer</p>
                                    :
                                    <p className='artist-profile-label'>About the Artist</p>
                                }
                                <div className='artist-profile-description'>
                                    <p className='artist-profile-description-text'>{artistProfile?.description}</p>
                                </div>
                            </div>
                            {+artistId === 3 ?
                                <div className='projects-container'>
                                    <p className='artist-profile-label'>Other Projects:
                                        <a target="_blank" rel="noreferrer noopener"
                                            href='https://gotta-latte-do.herokuapp.com/'>
                                            <span className='gotta-latte-do-link'>Gotta Latte Do</span>
                                        </a>
                                    </p>
                                </div>
                                :
                                ''
                            }
                        </div>
                    </div>
                </div>}
        </div>
    )

}

export default ArtistPortfolioProfile;
