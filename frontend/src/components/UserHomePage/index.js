import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getImages } from '../../store/images';
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
        <div className='main-container'>
            <h2>User Home Page</h2>
            <div className='all-images-container'>
                        {images?.map((image) => {
                            let tagString;
                            if (image.tags) {
                                tagString = image.tags;
                                tagString = tagString.map((tag) => `#${tag}`);
                                tagString = tagString.join(', ');
                            }

                            return <ImageDetail key={image.id} image={image} tagString={tagString} />
                        }
                        )}
            </div>
        </div>
    )
}

export default UserHomePage;
