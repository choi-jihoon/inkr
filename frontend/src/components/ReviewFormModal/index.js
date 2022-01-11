import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm.js';

import './ReviewFormModal.css';

function ReviewFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm showModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;
