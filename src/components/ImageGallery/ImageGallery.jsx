import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageCard key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
}

export default ImageGallery;
