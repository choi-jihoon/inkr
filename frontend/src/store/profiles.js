import { csrfFetch } from './csrf';

const LOAD_MY_PROFILE = 'profile/LOAD_MY_PROFILE';
const EDIT_MY_PROFILE = 'profile/EDIT_MY_PROFILE';

const loadMyProfile = (profile) => ({
    type: LOAD_MY_PROFILE,
    profile
})

const editProfile = (profile) => ({
    type: EDIT_MY_PROFILE,
    profile
})

export const getMyProfile = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/profiles/${id}`);

    if (response.ok) {
        const profile = await response.json();
        dispatch(loadMyProfile(profile))
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const editMyProfile = (data) => async (dispatch) => {
    const { fullName, location, description, specialties, image, profilePic } = data;
    const formData = new FormData();
    if (fullName) formData.append('fullName', fullName);
    if (location) formData.append('location', location);
    if (description) formData.append('description', description);
    if (specialties) formData.append('specialties', specialties);
    if (profilePic) formData.append('profilePic', profilePic);
    if (image) formData.append('image', image);
    const response = await csrfFetch(`/api/profiles/${data.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    })

    if (response.ok) {
        const editedProfile = await response.json();
        dispatch(editProfile(editedProfile));
        return editedProfile;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}


const initialState = [];

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_MY_PROFILE: {
            const currProfile = [action.profile];
            return currProfile;
        }

        case EDIT_MY_PROFILE: {
            const newState = [action.profile];
            return newState;
        }

        default:
            return state;
    }
}

export default profileReducer;
