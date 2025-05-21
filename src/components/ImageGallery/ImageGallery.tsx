import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';
import { UnsplashImage } from '../../types';

interface Props {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

function ImageGallery({ images, onImageClick }: Props) {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageCard key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
}

export default ImageGallery;
