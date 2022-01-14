import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ImageZoom from '../ImageZoom';
import FavoriteStar from '../FavoriteStar';
import './ImageDetail.css';

const ImageDetail = ({ image, tagString }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='image-container'>
            <img
            onClick={() => setShowModal(true)}
            className='grid-image'
            id={image.id}
            key={image.id}
            src={image.imageUrl}
            alt={`Tattoo by ${image.User.username}`}></img>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ImageZoom image={image} tagString={tagString} key={`${image.id}-zoom`} />
                </Modal>
            )}
            <FavoriteStar image={image} />
        </div>
    )
}

export default ImageDetail;
