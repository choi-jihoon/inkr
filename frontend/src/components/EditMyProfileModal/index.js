import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditMyProfileForm from './EditMyProfileForm.js';

function EditMyProfileModal({ myProfile }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className='edit-my-profile-button'
        onClick={() => setShowModal(true)}>
        <i className="fas fa-edit edit-profile"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditMyProfileForm showModal={setShowModal} myProfile={myProfile} />
        </Modal>
      )}
    </>
  );
}

export default EditMyProfileModal;
