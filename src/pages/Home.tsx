import { Cart, ManageProduct, ProductList } from '@/components';
import styles from '@styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.content}>
      <div>
        <ManageProduct />
        <ProductList />
      </div>
      <Cart />
    </div>
  );
};

export default Home;
