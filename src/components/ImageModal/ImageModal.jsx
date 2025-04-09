import { useEffect } from 'react';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root'); // Це важливо для доступності

function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      closeTimeoutMS={300}
    >
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
        {image && (
          <>
            <img src={image.urls.regular} alt={image.alt_description || 'Image'} className={styles.image} />
            <div className={styles.imageDetails}>
              <p>Author: {image.user.name}</p>
              <p>Likes: {image.likes}</p>
              <p>{image.description || 'No description available'}</p>
            </div>
          </>
        )}
      </div>
    </ReactModal>
  );
}

export default ImageModal;
