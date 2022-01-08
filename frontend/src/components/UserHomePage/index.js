import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-responsive-masonry';

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
        <div className='main-container'>
            <h2>User Home Page</h2>
            <div className='new-post-button'>
                <ImageFormModal />
            </div>
            <div className='all-images-container'>
                    <Masonry columnsCount={3} gutter={"30px"}>
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
                    </Masonry>
            </div>
        </div>
    )
}

export default UserHomePage;
