import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getArtistImages } from '../../store/artist';

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
        <div className='artist-portfolio'>
            <h2>{artist?.username}'s Portfolio</h2>
            <div>
                {artistImages.map((image) => {
                    return (
                        <>
                            <img className='grid-image' id={image.id} key={image.id} src={image.imageUrl} alt='i belong to an artist'></img>
                            <p key={image}>{image.tags}</p>
                        </>

                    )
                })}
            </div>
        </div>
    );
};

export default ArtistPortfolio;
