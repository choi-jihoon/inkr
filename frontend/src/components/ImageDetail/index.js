import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '../../context/Modal';
import { addToFavorites, updateFavoriteCount } from '../../store/images';
import ImageZoom from '../ImageZoom';
import './ImageDetail.css';

const ImageDetail = ({ image, tagString }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(image.favoritedCount);
    const sessionUser = useSelector(state => state.session.user);

    // useEffect(() => {
    //     const modal = document.querySelector('#modal-content');

    //     if (showModal) {
    //         modal.classList.add('modal-animation');
    //     }

    // }, [showModal])

    const handleFavorite = async (e) => {
        e.preventDefault();

        setCount(prevState => prevState + 1);

        const payload = {
            userId: sessionUser.id,
            imageId: image.id
        }

        await dispatch(addToFavorites(payload));

        console.log(count)

        const payload2 = {
            id: image.id,
            userId: image.userId,
            imageUrl: image.imageUrl,
            tags: image.tags,
            favoritedCount: (count + 1)
        }

        await dispatch(updateFavoriteCount(payload2));
    }


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
                    <button
                        className='favorited-button'
                        onClick={handleFavorite}
                    >
                        <i className="far fa-star"></i>
                    </button>
                    <p className='favorites-number'>
                        {count}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ImageDetail;
