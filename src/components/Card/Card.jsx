import styles from './Card.module.css';
import { ImgTile } from '../ImgTile';
import { AddToCartControl } from '../AddToCartControl';

export function Card({ meal, setCartCounter }) {
  return (
    <div className={styles.card_container}>
      <ImgTile imgUrl={meal.img} altText={meal.meal} />
      <div className={styles.card_content}>
        <div className={styles.heading_line}>
          <h3 className="heading-3">{meal.meal}</h3>
          <span className="price-text">$ {meal.price.toFixed(2)} USD</span>
        </div>
        <p className={`base-text ${styles.card_description}`}>
          {meal.instructions}
        </p>
        <div className={styles.control_container}>
          <AddToCartControl setCartCounter={setCartCounter} />
        </div>
      </div>
    </div>
  );
}
