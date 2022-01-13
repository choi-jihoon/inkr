import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getArtistImages } from '../../store/artist';
import ImageDetail from '../ImageDetail';
import MyPortfolioImageDetail from '../MyPortfolioImageDetail';
import ArtistPortfolioProfile from '../ArtistPortfolioProfile';
import Reviews from '../Reviews';
import ReviewFormModal from '../ReviewFormModal';


import './ArtistPortfolio.css';

const ArtistPortfolio = () => {
    const { artistId } = useParams();
    const dispatch = useDispatch();


    const sessionUser = useSelector(state => state.session.user)

    const artistImagesObject = useSelector((state) => state.artist);
    const artistImages = Object.values(artistImagesObject.artistImages);


    useEffect(() => {
        dispatch(getArtistImages(artistId))
    }, [dispatch, artistId])

    return (
        <div className='artist-portfolio-main-container-container'>
            <div id='artist-portfolio-main-container'>
                {artistImagesObject &&
                    <>
                        <div className='all-images-container' id='artist-portfolio-images-container'>
                            {artistImages.length ?
                                artistImages.map((image) => {
                                    let tagString;
                                    if (image.tags) {
                                        tagString = image.tags;
                                        tagString = tagString.map((tag) => `#${tag}`)
                                        tagString = tagString.join(', ')
                                    }

                                    if (image.userId === sessionUser.id) {
                                        return <MyPortfolioImageDetail key={image.id} image={image} tagString={tagString} />
                                    }

                                    return (
                                        <ImageDetail key={image?.id} image={image} tagString={tagString} />
                                    )
                                })
                                :
                                <div className='no-artist-images-container'>
                                    This artist has no posts to show.
                                </div>
                            }

                        </div>
                        <div className='portfolio-profile-container'>
                            <ArtistPortfolioProfile artistId={artistId} />
                        </div>
                        <div className='all-reviews-container-container'>
                            <div className='all-reviews-and-button-container'>
                                <div className='add-review-button-container'>
                                    <ReviewFormModal artistId={artistId} />
                                </div>
                                <Reviews artistId={artistId} />
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default ArtistPortfolio;
