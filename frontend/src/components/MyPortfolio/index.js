import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getArtistImages } from '../../store/artist';
import EditPostModal from '../EditPostModal';

import './MyPortfolio.css';

const MyPortfolio = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) {
        history.push('/');
    }


    const artistImagesObject = useSelector((state) => state.artist);
    const artistImages = Object.values(artistImagesObject);

    useEffect(() => {
        dispatch(getArtistImages(sessionUser.id))
    }, [dispatch, sessionUser])

    return (
        <div className='artist-portfolio'>
            <h2>My Portfolio</h2>
            <div>
                {artistImages.map((image) => {
                    let tagString;
                    if (image.tags) {
                        tagString = image.tags;
                        tagString = tagString.map((tag) => `#${tag}`)
                        tagString = tagString.join(', ')
                    }
                    return (
                        <>
                            <img className='grid-image' id={image?.id} key={image?.id} src={image.imageUrl} alt='i belong to me'></img>
                            <p key={image}>{tagString}</p>
                            <EditPostModal image={image} id={image.id} />
                        </>

                    )
                })}
            </div>
        </div>
    );
};

export default MyPortfolio;
