import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeletePostForm from './DeletePostForm.js';

function DeletePostModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='delete-post-trash' onClick={() => setShowModal(true)}><i className="far fa-trash-alt"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeletePostForm showModal={setShowModal} image={image} />
        </Modal>
      )}
    </>
  );
}

export default DeletePostModal;
