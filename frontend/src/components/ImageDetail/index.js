import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Modal } from '../../context/Modal';
import { addToFavorites, updateFavoriteCount } from '../../store/images';
import ImageZoom from '../ImageZoom';
import FavoriteStar from '../FavoriteStar';
import './ImageDetail.css';

const ImageDetail = ({ image, tagString }) => {
    const [showModal, setShowModal] = useState(false);


    // useEffect(() => {
    //     const modal = document.querySelector('#modal-content');

    //     if (showModal) {
    //         modal.classList.add('modal-animation');
    //     }

    // }, [showModal])



    return (
        <div className='image-container'>
            <img onClick={() => setShowModal(true)} className='grid-image' id={image.id} key={image.id} src={image.imageUrl} alt='hello'></img>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ImageZoom image={image} tagString={tagString} key={`${image.id}-zoom`} />
                </Modal>
            )}
            <div className='image-info'>
                <NavLink to={`/artists/${image?.userId}`}>
                    <p className='artist-name'>{image?.User.username}</p>
                </NavLink>
                <div className='favorites-count'>
                    <FavoriteStar image={image} tagString={tagString} />
                </div>
            </div>
        </div>
    )
}

export default ImageDetail;
