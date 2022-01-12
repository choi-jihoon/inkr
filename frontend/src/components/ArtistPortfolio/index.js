import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getArtistImages } from '../../store/artist';
import ImageDetail from '../ImageDetail';
import ArtistPortfolioProfile from '../ArtistPortfolioProfile';
import Reviews from '../Reviews';
import ReviewFormModal from '../ReviewFormModal';


import './ArtistPortfolio.css';

const ArtistPortfolio = () => {
    const { artistId } = useParams();
    const dispatch = useDispatch();

    const artistImagesObject = useSelector((state) => state.artist);
    const artistImages = Object.values(artistImagesObject.artistImages);
    const artist = artistImages[0]?.User

    useEffect(() => {
        dispatch(getArtistImages(artistId))
    }, [dispatch, artistId])

    return (
        <div className='main-container' id='artist-portfolio-main-container'>
            {artistImagesObject &&
                <>
                    {/* <h2>{artist?.username}'s Portfolio</h2> */}
                    <div className='all-images-container' id='artist-portfolio-images-container'>
                        {artistImages.map((image) => {
                            let tagString;
                            if (image.tags) {
                                tagString = image.tags;
                                tagString = tagString.map((tag) => `#${tag}`)
                                tagString = tagString.join(', ')
                            }
                            return (
                                <ImageDetail key={image?.id} image={image} tagString={tagString} />

                            )
                        })}
                    </div>
                    <div className='portfolio-profile-container'>
                        <ArtistPortfolioProfile artistId={artistId} />
                        <div className='all-reviews-container-container'>
                            <div className='add-review-button-container'>
                                <ReviewFormModal artistId={artistId} />
                            </div>
                            <Reviews artistId={artistId} />
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default ArtistPortfolio;
