import { CartButton } from '../CartButton';
import styles from './Header.module.css';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

export function Header({ cartCounter }) {
  return (
    <header className={`container ${styles.header}`}>
      <Logo />
      <div className={styles.right_container}>
        <Navigation />
        <CartButton count={cartCounter} />
      </div>
    </header>
  );
}
