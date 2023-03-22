import React, { useState } from 'react';
import { CartProductItem } from '@/components';
import { useAppSelector } from '@/hooks/useTypedSelector';
import styles from '@styles/Cart.module.css';

const Cart = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { products } = useAppSelector(state => state.cartSlice);

  const total = +products.reduce((acc, cur) => acc + cur.count * cur.price, 0).toFixed(2);

  const toggleCartHandler = () => {
    setShowCart(prevState => !prevState);
  };

  return (
    <div className={styles.cartContainer}>
      <div className={`${styles.cart} ${showCart ? styles.showCart : ''}`}>
        {products.length > 0 ?
          products.map(product => (<CartProductItem key={product.id} product={product} />)) :
          <div>NO PRODUCTS IN CART</div>}
        {products.length > 0 && (<div>Total: {total}</div>)}
      </div>
      <button className={styles.cartBtn}
              onClick={toggleCartHandler}>{products.length > 0 ? `(${products.length})` : ''}Cart
      </button>
    </div>
  );
};

export default Cart;
