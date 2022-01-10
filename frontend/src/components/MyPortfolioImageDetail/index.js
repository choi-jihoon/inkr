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
                    {/* <select>
                    {tagString ? tagString.split(',').map(tag => <option value={tag} key={tag} className='single-tag portfolio-tag tag-text'>{`${tag}`}</option>) : <option value={null} key='notag' className='no-tags tag-text'>No tags</option>}
                    </select> */}
                    <div className='portfolio-tags tag-text' key={image}>Tags: {tagString ? tagString.split(',').map(tag => <p key={tag} className='single-tag portfolio-tag tag-text'>{`${tag}`}</p>) : <p key='notag' className='no-tags tag-text'>No tags</p>}</div>
                </div>
                <div className='favorites-count portfolio-fave-count'><i className="far fa-star portfolio-star"></i><p>{image.favoritedCount}</p></div>
            </div>
        </div>
    )
}

export default MyPortfolioImageDetail;
