import styles from './CartButton.module.css';
import CartIcon from '../../assets/icons/cartIcon.svg?react';

export function CartButton({ count }) {
  return (
    <button className={`${styles.button}`}>
      <CartIcon />
      <span className={`btn-counter-text ${styles.button_counter}`}>
        {count}
      </span>
    </button>
  );
}
