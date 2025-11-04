import styles from './Button.module.css';

export function Button({ text, option = 'primary' }) {
  return <button className={`btn-text ${styles[option]}`}>{text}</button>;
}
