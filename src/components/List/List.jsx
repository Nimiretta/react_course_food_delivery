import { Component } from 'react';
import styles from './List.module.css';

const items = ['First item', 'Second item', 'Third item'];

export class List extends Component {
  render() {
    return (
      <ul className={styles.List}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
}
