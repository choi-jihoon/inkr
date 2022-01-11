import { csrfFetch } from "./csrf";

const LOAD = 'artist/LOAD';
const EDIT_POST = 'artist/EDIT_POST'
const DELETE = 'artist/DELETE'
const LOAD_REVIEWS = 'artist/LOAD_REVIEWS'


export const getAllArtistImages = (state) => Object.values(state.artist);

const load = (images) => ({
    type: LOAD,
    images
})

const edit = (image) => ({
    type: EDIT_POST,
    image
})

const deleteImage = (imageId) => ({
    type: DELETE,
    imageId
})

const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
})

export const getArtistReviews = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`);

    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadReviews(reviews));
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const getArtistImages = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/artists/${id}/images`);

    if (response.ok) {
        const images = await response.json();
        dispatch(load(images));
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const editArtistImage = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const image = await response.json();
        dispatch(edit(image));
        return image;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const deleteArtistImage = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteImage(data.id));
        return;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

const initialState = {
    reviews: {},
    artistImages: {}
};

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allImages = {};
            action.images.forEach((image) => {
                allImages[image.id] = image;
            });
            return {
                ...state,
                artistImages: {
                    ...allImages
                }
            }
        }

        case EDIT_POST: {
            const newState = {
                ...state,
                artistImages: {
                    ...state.artistImages,
                    [action.image.id]: action.image
                }
            };
            return newState;
        }

        case DELETE: {
            const newState = { ...state };
            delete newState.artistImages[action.imageId]
            return newState;
        }

        case LOAD_REVIEWS: {
            const newState = { ...state };
            const allReviews = action.reviews.forEach(review => {
                allReviews[review.id] = review;
            });
            newState.reviews = {
                ...allReviews
            };
            return newState;
        }

        default:
            return state;
    }
}

export default artistReducer;
