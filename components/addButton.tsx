import type { NextPage } from 'next';
import { BiPlus } from "react-icons/bi";

import styles from '../styles/Style.module.css';

const Home: NextPage = () => {
  const handleAddProduct = () => {
    alert('Produto adicionado');
  };

  return (
    <div>
      <button 
      className={styles.addButton}
      onClick={handleAddProduct}>
        <BiPlus size={100} color='#25D366' />
      </button>
    </div>
  );
};

export default Home;
