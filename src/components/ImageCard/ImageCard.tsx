import styles from './ImageCard.module.css';
import { UnsplashImage } from '../../types';

interface Props {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

function ImageCard({ image, onClick }: Props) {
  return (
    <li className={styles.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description ?? ''}
        className={styles.image}
      />
    </li>
  );
}

export default ImageCard;
