import { useState } from 'react';

import EditPostModal from '../EditPostModal';
import DeletePostModal from '../DeletePostModal';

import { Modal } from '../../context/Modal';
import ImageZoom from '../ImageZoom';
import './MyPortfolioImageDetail.css';

const MyPortfolioImageDetail = ({ image, tagString }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='image-container portfolio-image' key={`${image.id}-artist-image`}>
            <img onClick={() => setShowModal(true)} className='grid-image portfolio-grid-image' id={image.id} key={image.id} src={image.imageUrl} alt='hello'></img>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ImageZoom image={image} tagString={tagString} key={`${image.id}-zoom`} />
                </Modal>
            )}
            <div className='edit-delete-butt-container'>
                <EditPostModal image={image} id={image.id} />
                <DeletePostModal image={image} id={image.id} />
            </div>
            <div className='portfolio-image-info'>
                <div className='tag-container'>
                    <div className='portfolio-tags tag-text' key={image}>Tags: <p className='single-tag portfolio-tag tag-text'>{tagString ? tagString.split(',').map(tag => `${tag}`) : 'No tags'}</p></div>
                </div>
                <div className='portfolio-fave-count'><p>{image.favoritedCount}</p><i className="fas fa-star portfolio-star"></i></div>
            </div>
        </div>
    )
}

export default MyPortfolioImageDetail;
