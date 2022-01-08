import { NavLink } from 'react-router-dom';
import './ImageDetail.css';

const ImageDetail = ({ image, tagString }) => {
    return (
        <>
            <NavLink to={`/artists/${image.userId}`}>
                <img className='grid-image' id={image.id} key={image.id} src={image.imageUrl} alt='hello'></img>
            </NavLink>
            <p className='favorites-count'>Favourites: {image.favoritedCount}</p>
            <p key={image}>{tagString}</p>
        </>
    )
}

export default ImageDetail;
