import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm.js';

function ReviewFormModal({artistId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='minty-button add-review-modal-button'
      onClick={() => setShowModal(true)}>
        Add Review
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm showModal={setShowModal} artistId={artistId} />
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;
