
const LOAD = 'images/LOAD'

export const getAllImages = (state) => Object.values(state.images);

const load = (images) => ({
    type: LOAD,
    images
})

export const getImages = () => async (dispatch) => {
    const response = await fetch(`/api/images`);

    if (response.ok) {
        const images = await response.json();
        dispatch(load(images));
    }
}

const initialState = {};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allImages = {};
            action.images.images.forEach((image) => {
                allImages[image.id] = image;
            });
            return {
                ...allImages,
                ...state
            }
        }
        default:
            return state;
    }
}

export default imageReducer;
