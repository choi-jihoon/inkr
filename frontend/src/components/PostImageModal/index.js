import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ImageForm from './ImageForm.js';

function ImageFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>New Post</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ImageForm showModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default ImageFormModal;
