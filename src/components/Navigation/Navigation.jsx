import styles from './Navigation.module.css';
import { navItems } from '../../data.config';

const isCurrent = (item) => item === 'Home';

export function Navigation() {
  return (
    <nav>
      <ul className={styles.nav}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className={`link ${isCurrent(item) ? 'highlight-text' : styles.nav_item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
