import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeletePostForm from './DeletePostForm.js';

function DeletePostModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeletePostForm showModal={setShowModal} image={image} />
        </Modal>
      )}
    </>
  );
}

export default DeletePostModal;
