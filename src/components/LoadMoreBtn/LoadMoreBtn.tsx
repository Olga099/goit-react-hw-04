import styles from './LoadMoreBtn.module.css';

interface Props {
  onClick: () => void;
}

function LoadMoreBtn({ onClick }: Props) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;
