import type { NextPage } from 'next';
import Image from 'next/image';
import { FaImage } from "react-icons/fa";

import styles from '../styles/Style.module.css';

import Header from '../components/header';
import AddButton from '../components/addButton';
import Footer from '../components/footer';
import Icon from '../server/src/asset/img/images.png';

const NoImage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <article className={styles.card}>
          <FaImage  size={60} className={styles.image}/>
          <h3 className={styles.imageTitle}>No image</h3>
        </article>
        <AddButton />
      </main>
      <Footer />
    </div>
  );
};

export default NoImage;
