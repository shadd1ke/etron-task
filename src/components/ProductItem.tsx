import React, { FC } from 'react';
import { Product } from '@/declaration/declaration';
import { useActions } from '@/hooks/useActions';
import styles from '@styles/Product.module.css';

type Props = {
  product: Product
}
const ProductItem: FC<Props> = ({ product }) => {
  const { addProduct } = useActions();

  const addProductHandle = () => {
    addProduct(product);
  };
  return (
    <div className={styles.item}>
      <span>{product.name} - <span>{product.price}</span></span>
      <button onClick={addProductHandle}>buy</button>
    </div>
  );
};

export default ProductItem;
