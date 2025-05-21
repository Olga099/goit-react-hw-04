import styles from './ErrorMessage.module.css';

interface Props {
  message: string;
}

function ErrorMessage({ message }: Props) {
  return <p className={styles.error}>{message}</p>;
}

export default ErrorMessage;
