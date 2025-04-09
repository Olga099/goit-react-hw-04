import styles from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  return (
    <li className={styles.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </li>
  );
}

export default ImageCard;
