import { NavLink } from 'react-router-dom';

const ImageDetail = ({ image }) => {
    return (
        <>
        <NavLink to={`/artists/${image.userId}`}>
            <img className='grid-image' id={image.id} key={image.id} src={image.imageUrl} alt='hello'></img>
        </NavLink>
        <p>Favourites: {image.favoritedCount}</p>
        </>
    )
}

export default ImageDetail;
