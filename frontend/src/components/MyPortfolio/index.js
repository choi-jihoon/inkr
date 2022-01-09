import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import { Modal } from '../../context/Modal';
import { getArtistImages } from '../../store/artist';
import EditPostModal from '../EditPostModal';
import DeletePostModal from '../DeletePostModal';
import ImageZoom from '../ImageZoom';
// import ImageDetail from '../ImageDetail';
import MyPortfolioImageDetail from '../MyPortfolioImageDetail';

import './MyPortfolio.css';

const MyPortfolio = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) {
        history.push('/');
    }


    const artistImagesObject = useSelector((state) => state.artist);
    const artistImages = Object.values(artistImagesObject);

    useEffect(() => {
        dispatch(getArtistImages(sessionUser.id))
    }, [dispatch, sessionUser])

    return (
        <div className='main-container'>
            <h2>My Portfolio</h2>
            <div className='all-images-container'>
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
