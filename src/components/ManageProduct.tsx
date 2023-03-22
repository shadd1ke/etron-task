import React from 'react';
import { useActions } from '@/hooks/useActions';
import { parseInputProduct } from '@/utils/utils';
import styles from '@styles/ManageProduct.module.css';

const ManageProduct = () => {
  const { setProducts, clearCart } = useActions();
  const ref = React.useRef<HTMLTextAreaElement>(null);

  const processProductHandle = () => {
    if (ref.current) {
      setProducts(parseInputProduct(ref.current.value));
      clearCart();
    }
  };
  return (
    <div className={styles.content}>
      <textarea ref={ref} placeholder={'type products...'}/>
      <button onClick={processProductHandle}>PROCESS</button>
    </div>
  );
};

export default ManageProduct;
