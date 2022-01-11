import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getArtistImages } from '../../store/artist';
import MyPortfolioImageDetail from '../MyPortfolioImageDetail';

import './MyPortfolio.css';

const MyPortfolio = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) {
        history.push('/');
    }

    const artistImagesObject = useSelector((state) => state.artist.artistImages);
    const artistImages = Object.values(artistImagesObject);

    useEffect(() => {
        dispatch(getArtistImages(sessionUser.id))
    }, [dispatch, sessionUser])

    return (
        <div className='main-container my-portfolio-container'>
            <h2 className='my-portfolio-header'>My Portfolio</h2>
            <div className='all-images-container portfolio-all-images-container'>
                {artistImages.map((image) => {
                    let tagString;
                    if (image.tags) {
                        tagString = image.tags;
                        tagString = tagString.map((tag) => `#${tag}`)
                        tagString = tagString.join(', ')
                    }
                    return (
                        <MyPortfolioImageDetail key={image.id} image={image} tagString={tagString} />
                    )
                })}
            </div>


        </div>
    );
};

export default MyPortfolio;
