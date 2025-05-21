import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

interface Props {
  onSubmit: (query: string) => void;
}

function SearchBar({ onSubmit }: Props) {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(input.trim());
    setInput('');
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
          value={input}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
