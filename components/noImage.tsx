import type { NextPage } from 'next';
import Image from 'next/image';
import { RiImageFill } from "react-icons/ri";

import styles from '../styles/Style.module.css';

import Header from '../components/header';
import AddButton from './addInput';
import Footer from '../components/footer';
import Icon from '../server/src/asset/img/images.png';

const NoImage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <article className={styles.card}>
          <RiImageFill  size={200} color='#c2c2c2' className={styles.image}/>
          <h3 className={styles.imageTitle}>No image</h3>
        </article>
        <AddButton />
      </main>
      <Footer />
    </div>
  );
};

export default NoImage;
