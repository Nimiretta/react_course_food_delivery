import styles from './AddToCartControl.module.css';
import { Input } from '../Input';
import { Button } from '../Button';

export function AddToCartControl({ setCartCounter }) {
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const amount = +form.elements.namedItem('amount').value;
    setCartCounter((prev) => prev + amount);
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        name="amount"
        defaultValue={1}
        min={1}
        step={1}
        required
        onBlur={(e) => {
          if (!e.currentTarget.value) {
            e.currentTarget.value = e.currentTarget.defaultValue;
          }
        }}
      />
      <Button option="primary_card" text="Add to card" type="submit" />
    </form>
  );
}
