import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getImages } from '../../store/images';
import ImageDetail from "../ImageDetail";
import MyPortfolioImageDetail from '../MyPortfolioImageDetail';

import './UserHomePage.css';

function UserHomePage() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user)
    const imagesObject = useSelector((state) => state.images);
    const images = Object.values(imagesObject.order);


    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);


    return (
        <div className='main-container'>
            <div className='title-container'>
                <h2 id='discover'>Discover</h2>
            </div>
            <div className='all-images-container'>
                {images?.map((image) => {
                    let tagString;
                    if (image.tags) {
                        tagString = image.tags;
                        tagString = tagString.map((tag) => `#${tag}`);
                        tagString = tagString.join(', ');
                    }

                    if (image.userId === sessionUser.id) {
                        return <MyPortfolioImageDetail
                            key={image.id}
                            image={image}
                            tagString={tagString} />
                    }

                    return <ImageDetail
                        key={image.id}
                        image={image}
                        tagString={tagString} />
                }
                )}
            </div>
        </div>
    )
}

export default UserHomePage;
