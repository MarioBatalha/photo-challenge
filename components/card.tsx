import type { NextPage } from 'next';
import Image from 'next/image';

import { AiOutlineCloseCircle } from "react-icons/ai";

import styles from '../styles/Style.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import AddButton from '../components/addButton';

import first from '../server/src/asset/img/01.jpg';

interface Products {
  ( 
    id?: number,
    description?: string,
    image_url?: string,
  ): void
}

const Card: NextPage = () => {
  const handleRemoveProduct = () => {
    alert('Tem a certeza que pretende remover esse produto?');
  }
  return (
    <div className={styles.container}>
     <Header /> 
      <main className={styles.main}>    
        <article 
          className={styles.card}>
          <Image
           src={first}
           className={styles.image}/>
          <button 
           className={styles.removeButton}
           onClick={handleRemoveProduct}>
            <AiOutlineCloseCircle size={30} />
          </button>
        </article>
        <article 
          className={styles.card}>
          <Image
           src={first}
           className={styles.image}/>
          <button 
           className={styles.removeButton}
           onClick={handleRemoveProduct}>
           <AiOutlineCloseCircle size={30} />
          </button>
        </article>
        <article 
          className={styles.card}>
          <Image
           src={first}
           className={styles.image}/>
          <button 
           className={styles.removeButton}
           onClick={handleRemoveProduct}>
            <AiOutlineCloseCircle size={30} />
          </button>
        </article>
        <article 
          className={styles.card}>
          <Image
           src={first}
           className={styles.image}/>
          <button 
           className={styles.removeButton}
           onClick={handleRemoveProduct}>
            <AiOutlineCloseCircle size={30} />
          </button>
        </article>

       <AddButton />
      </main>

      <Footer />
    </div>
  )
}

export default Card;
