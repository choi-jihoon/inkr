import { csrfFetch } from "./csrf";

const LOAD = 'images/LOAD';


export const getAllArtistImages = (state) => Object.values(state.images);

const load = (images) => ({
    type: LOAD,
    images
})

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

const initialState = {};

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allImages = {};
            action.images.images.forEach((image) => {
                allImages[image.id] = image;
            });
            return {
                ...allImages,
            }
        }

        default:
            return state;
    }
}

export default artistReducer;
