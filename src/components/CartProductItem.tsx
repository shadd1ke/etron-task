import React, { FC } from 'react';
import { CartProduct } from '@/declaration/declaration';
import { useActions } from '@/hooks/useActions';
import styles from '@styles/Cart.module.css';

type Props = {
  product: CartProduct
}

const CartProductItem: FC<Props> = React.memo(({ product }) => {
  const { increaseProductAmount, decreaseProductAmount, removeProduct } = useActions();

  const increase = () => {
    increaseProductAmount({ id: product.id });
  };
  const decrease = () => {
    decreaseProductAmount({ id: product.id });
  };
  const deleteItem = () => {
    removeProduct({ id: product.id });
  };

  console.log('render product')
  return (
    <div className={styles.cartProductItem}>
      <div className={styles.productInfo}>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
      </div>
      <div className={styles.changeCount}>
        <button disabled={product.count === 1} onClick={decrease}>-</button>
        <p>{product.count}</p>
        <button onClick={increase}>+</button>
        <button onClick={deleteItem}>Del</button>
      </div>
    </div>
  );
});

export default CartProductItem;
