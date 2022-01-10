import { csrfFetch } from './csrf';

const LOAD = 'images/LOAD';
const CREATE = 'images/CREATE';
const FAVORITE = 'images/FAVORITE';
const UNFAVORITE = 'images/UNFAVORITE'


export const getAllImages = (state) => Object.values(state.images);

const load = (images) => ({
    type: LOAD,
    images
})

const create = (image) => ({
    type: CREATE,
    image
})

const favorite = (image) => {
    return {
        type: FAVORITE,
        image
    }
}

const unfavorite = (image, userId) => {
    return {
        type: UNFAVORITE,
        image,
        userId
    }
}



export const getImages = () => async (dispatch) => {
    const response = await csrfFetch(`/api/images`);

    if (response.ok) {
        const images = await response.json();
        dispatch(load(images));
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const postImage = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/images`, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const image = await response.json();
        dispatch(create(image));
        return image;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const addToFavorites = (data) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${data.imageId}/favorites`, {
        method: 'POST',
        body: JSON.stringify(data)
    })

    if (response.ok) {
        return;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const deleteFromFavorites = (data) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${data.imageId}/favorites`, {
        method: 'DELETE',
        body: JSON.stringify(data)
    })

    if (response.ok) {
        return;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const decrementFavoriteCount = (data, userId) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}/favorites`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })

    if (response.ok) {
        const image = await response.json();
        dispatch(unfavorite(image, userId));
        return image;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const incrementFavoriteCount = (data) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}/favorites`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })

    if (response.ok) {
        const image = await response.json();
        dispatch(favorite(image));
        return image;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}


const initialState = {
    order: []
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allImages = {};
            action.images.forEach((image) => {
                allImages[image.id] = image;
            });
            return {
                ...allImages,
                ...state,
                order: [
                    ...action.images
                ]
            }
        }

        case CREATE: {
            const newState = {
                ...state.images,
                [action.image.id]: action.image,
                order: [
                    action.image,
                    ...state.order
                ]
            };
            return newState;
        }

        case FAVORITE: {
            const favoritedCount = Number(state[action.image.id].favoritedCount);
            const orderedImageIndex = state.order.findIndex(image => image.id === action.image.id);
            const newCount = favoritedCount + 1;
            const newState = {
                ...state,
                [action.image.id]: {
                    ...state[action.image.id],
                    favoritedCount: newCount,
                    Favorites: [
                        ...state[action.image.id].Favorites,
                        action.image
                    ]
                }
            };
            newState.order[orderedImageIndex].favoritedCount = newCount;
            return newState;
        }

        case UNFAVORITE: {
            const favoritedCount = Number(state[action.image.id].favoritedCount);
            const favoriteIndex = state[action.image.id].Favorites.findIndex(favorite => favorite.userId === action.userId);
            const newCount = favoritedCount - 1;
            const newState = {
                ...state,
                [action.imageId]: {
                    ...state[action.image.id],
                    favoritedCount: newCount,
                    Favorites: [
                        ...state[action.image.id].Favorites,
                        action.image
                    ]
                }
            }
            newState[action.image.id].Favorites.splice(favoriteIndex, 1);
            return newState;
        }

        default:
            return state;
    }
}

export default imageReducer;
