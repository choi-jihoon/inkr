import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPostForm from './EditPostForm.js';

function EditPostModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Tags</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPostForm showModal={setShowModal} image={image} />
        </Modal>
      )}
    </>
  );
}

export default EditPostModal;
