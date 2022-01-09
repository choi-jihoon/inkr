import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { Modal } from '../../context/Modal';
import ImageZoom from '../ImageZoom';
import './ImageDetail.css';

const ImageDetail = ({ image, tagString }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='image-container'>
            <img onClick={() => setShowModal(true)} className='grid-image' id={image.id} key={image.id} src={image.imageUrl} alt='hello'></img>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ImageZoom image={image} />
                </Modal>
            )}
            <NavLink to={`/artists/${image?.userId}`}>
                <p className='artist-name'>{image?.User.username}</p>
            </NavLink>
            <p className='favorites-count'>Favourites: {image?.favoritedCount}</p>
            <p key={image}>{tagString}</p>
        </div>
    )
}

export default ImageDetail;
