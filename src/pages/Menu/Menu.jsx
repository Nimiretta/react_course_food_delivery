import styles from './Menu.module.css';
import { Button } from '../../components/Button';
import { useEffect, useMemo, useState } from 'react';
import { Card } from '../../components/Card';
import { getMeals } from '../../api/mealApi';
import { mainPhoneNumber } from '../../data.config.js';

export function Menu({ setCartCounter }) {
  const [meals, setMeals] = useState([]);
  const [itemCount, setItemCount] = useState(6);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMeals()
      .then((fetchedMeals) => {
        setMeals(fetchedMeals);
      })
      .catch(() => setError('Failed to load meals'));
  }, []);

  const categories = useMemo(
    () => [...new Set(meals.map((m) => m.category))],
    [meals]
  );

  return (
    <div className="wrapper-basic-page">
      <section className={`container page ${styles.main_container}`}>
        <h1 className="heading-1 highlight-text">Browse our menu</h1>
        <p className={`subtext ${styles.subtext}`}>
          {'Use our menu to place an order online, or '}
          <span
            className={`highlight-text ${styles.tooltip}`}
            title={mainPhoneNumber}
          >
            phone
          </span>
          {' our store'}
          <br /> to place a pickup order. Fast and fresh food.
        </p>
        <div className={styles.btn_block}>
          {categories.map((category) => (
            <Button key={category} text={category} option="secondary" />
          ))}
        </div>
        {error ? (
          <p className="error-text">{error}</p>
        ) : (
          <>
            <div className={styles.card_list}>
              {meals.slice(0, itemCount).map((meal) => (
                <Card
                  key={meal.id}
                  meal={meal}
                  setCartCounter={setCartCounter}
                />
              ))}
            </div>
            {itemCount < meals.length && (
              <Button
                text="See more"
                onClick={() => setItemCount((prev) => prev + 6)}
              />
            )}
          </>
        )}
      </section>
    </div>
  );
}
