import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from "react-responsive-masonry";

import { getImages } from '../../store/images';
import ImageFormModal from '../PostImageModal';
import ImageDetail from "../ImageDetail";

import './UserHomePage.css';

function UserHomePage({ user }) {
    const dispatch = useDispatch();

    const imagesObject = useSelector((state) => state.images.order);
    const images = Object.values(imagesObject);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);


    return (
        <div className='user-home-container'>
            <h1>User Home Page</h1>
            <div className='new-post-button'>
                <ImageFormModal />
            </div>
            <div className='all-images-container'>
                    <Masonry columnsCount={3} gutter={30}>
                        {images?.map((image) => (
                            <ImageDetail key={image.id} image={image} />
                        ))}
                    </Masonry>
            </div>
        </div>
    )
}

export default UserHomePage;
