import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Masonry from 'react-responsive-masonry';
import { useState } from 'react';

import { Modal } from '../../context/Modal';
import { getArtistImages } from '../../store/artist';
import EditPostModal from '../EditPostModal';
import DeletePostModal from '../DeletePostModal';
import ImageZoom from '../ImageZoom';

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
                <Masonry columnsCount={3} gutter={"30px"}>
                    {artistImages.map((image) => {
                        let tagString;
                        if (image.tags) {
                            tagString = image.tags;
                            tagString = tagString.map((tag) => `#${tag}`)
                            tagString = tagString.join(', ')
                        }
                        return (
                            <div className='image-container' key={image.id}>
                                <img onClick={() => setShowModal(true)} className='grid-image' id={image.id} key={image.id} src={image.imageUrl} alt='hello'></img>
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <ImageZoom />
                                    </Modal>
                                )}
                                <p className='favorites-count'>Favourites: {image.favoritedCount}</p>
                                <p key={image}>{tagString}</p>
                                <EditPostModal image={image} id={image.id} />
                                <DeletePostModal image={image} id={image.id} />
                            </div>
                        )
                    })}
                </Masonry>
            </div>
        </div>
    );
};

export default MyPortfolio;
