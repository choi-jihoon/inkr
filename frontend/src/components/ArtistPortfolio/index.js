import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Masonry from 'react-responsive-masonry';

import { getArtistImages } from '../../store/artist';
import ImageDetail from '../ImageDetail';

import './ArtistPortfolio.css';

const ArtistPortfolio = () => {
    const { artistId } = useParams();
    const dispatch = useDispatch();

    const artistImagesObject = useSelector((state) => state.artist);
    const artistImages = Object.values(artistImagesObject);
    const artist = artistImages[0]?.User

    useEffect(() => {
        dispatch(getArtistImages(artistId))
    }, [dispatch, artistId])

    return (
        <div className='main-container'>
            <h2>{artist?.username}'s Portfolio</h2>
            <div className='all-images-container'>
                <Masonry columnsCount={3} gutter={"30px"}>
                    {artistImages.map((image) => {
                        let tagString;
                        if (image.tags) {
                            tagString = image.tags;
                            tagString = tagString.map((tag) => `#${tag}`)
                            tagString = tagString.join(', ')
                        }
                        return (
                            <div className='image-container'>
                                <ImageDetail key={image?.id} image={image} tagString={tagString} />
                            </div>

                        )
                    })}
                </Masonry>
            </div>
        </div>
    );
};

export default ArtistPortfolio;
