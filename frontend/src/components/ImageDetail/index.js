import { NavLink } from 'react-router-dom';
import './ImageDetail.css';

const ImageDetail = ({ image }) => {
    return (
        // <div className='image-container'>
        <>
            <NavLink to={`/artists/${image.userId}`}>
                <img className='grid-image' id={image.id} key={image.id} src={image.imageUrl} alt='hello'></img>
            </NavLink>
            <p className='favorites-count'>Favourites: {image.favoritedCount}</p>
        </>
        // </div>
    )
}

export default ImageDetail;
