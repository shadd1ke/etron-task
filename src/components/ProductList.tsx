import React from 'react';
import { useAppSelector } from '@/hooks/useTypedSelector';
import { ProductItem } from '@/components';
import styles from '@styles/Product.module.css';

const ProductList = () => {
  const { products } = useAppSelector(state => state.rootSlice);

  return (
    <div className={styles.content}>
      {products.length ? products.map(product => (<ProductItem key={product.id} product={product} />)) :
        <div>NO PRODUCTS</div>}
    </div>
  );
};

export default ProductList;
