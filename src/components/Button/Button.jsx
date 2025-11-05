import styles from './Button.module.css';

export function Button({ text, option = 'primary', type = 'button', onClick }) {
  return (
    <button
      className={`btn-text ${styles[option]}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
