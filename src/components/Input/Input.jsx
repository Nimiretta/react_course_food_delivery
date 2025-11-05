import styles from './Input.module.css';

export function Input({ type = 'number', name, ...rest }) {
  return (
    <input
      className={`base-text ${styles.input}`}
      type={type}
      name={name}
      {...rest}
    />
  );
}
