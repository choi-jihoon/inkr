import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReviewForm from './DeleteReviewForm';

import './DeleteReviewModal.css';

function DeleteReviewModal({ review }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='delete-post-trash' onClick={() => setShowModal(true)}><i className="far fa-trash-alt"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteReviewForm showModal={setShowModal} review={review} />
        </Modal>
      )}
    </>
  );
}

export default DeleteReviewModal;
