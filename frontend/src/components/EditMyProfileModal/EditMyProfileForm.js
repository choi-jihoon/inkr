import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editMyProfile } from "../../store/profiles";

import './EditMyProfileForm.css';

function EditMyProfileForm({ showModal, myProfile }) {
    const dispatch = useDispatch();

    const [profilePic, setProfilePic] = useState(myProfile.profilePic ? myProfile.profilePic : '');
    const [fullName, setFullName] = useState(myProfile.fullName ? myProfile.fullName : '');
    const [location, setLocation] = useState(myProfile.location ? myProfile.location : '');
    const [specialties, setSpecialties] = useState(myProfile.specialties ? myProfile.specialties.join(', ') : []);
    const [description, setDescription] = useState(myProfile.description ? myProfile.description : '');
    const [validationErrors, setValidationErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        let specialtiesArr;
        if (specialties.length) {
            specialtiesArr = specialties.split(', ');
            setSpecialties(specialtiesArr);
        };

        const payload = {
            id: myProfile.id,
            userId: myProfile.userId,
            profilePic,
            fullName,
            location,
            specialties: specialtiesArr,
            description
        }

        dispatch(editMyProfile(payload));
        showModal(false)
    };

    useEffect(() => {
        const errors = [];
        if (description.length > 255) errors.push('Description cannot be longer than 255 characters.');

        setValidationErrors(errors);
    }, [description]);


    return (
        <form onSubmit={handleSubmit}>
            <div className='form-header'>
                <img className='form-logo' src='/images/small-logo.png' alt='inkr logo'></img>
                <h4>
                    Edit My Profile
                </h4>
            </div>
            <ul>
                {validationErrors.length > 0 && validationErrors.map((error) => (
                    <li className='error' key={error}>{error}</li>
                ))}
            </ul>
            <div className='form-element'>
                <label className='form-label'>Profile Pic</label>
                <input
                    type="text"
                    value={profilePic}
                    onChange={(e) => setProfilePic((e.target.value))}
                    placeholder='Profile Pic URL'
                />
            </div>
            <div className='form-element'>
                <label className='form-label'>Full Name</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName((e.target.value))}
                    placeholder='Full Name'
                />
            </div>
            <div className='form-element'>
                <label className='form-label'>Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation((e.target.value))}
                    placeholder='Location'
                />
            </div>
            <div className='form-element'>
                <label className='form-label'>Specialties</label>
                <input
                    type="text"
                    value={specialties}
                    onChange={(e) => setSpecialties((e.target.value))}
                    placeholder='Separate specalities by comma and space'
                />
            </div>
            <div className='form-element form-text-area'>
                <label className='form-label'>About Me</label>
                <textarea
                    type="text"
                    value={description}
                    onChange={(e) => setDescription((e.target.value))}
                    placeholder='Tell us a little bit about yourself.'
                />
            </div>
            <button
                className='edit-button'
                type="submit"
                disabled={validationErrors.length > 0}
            >
                Edit Profile
            </button>
        </form>
    );
}

export default EditMyProfileForm;
