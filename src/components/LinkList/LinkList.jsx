import styles from './LinkList.module.css';

export function LinkList({ title, items }) {
  return (
    <div className={styles.list_container}>
      <h4 className="heading-4">{title}</h4>
      <ul className={styles.list_container}>
        {items.map((item, i) => (
          <li key={i}>
            <a className="link" href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
