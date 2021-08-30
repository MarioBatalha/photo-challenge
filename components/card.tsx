import type { NextPage } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

import { AiOutlineCloseCircle } from "react-icons/ai";

import styles from '../styles/Style.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import AddButton from './addInput';

import first from '../server/src/public/images/01.jpg';
interface Products {
  ( 
    id?: number,
    description?: string,
    image_url?: string,
  ): void
}

const Card: NextPage = () => {

  const api = 'http://localhost:3333/products';

  axios.get(api).then(res => {
   return { products: res.data }
  }).catch(err => {
    alert(`No image found`);
  });


  const handleRemoveProduct = () => {
    alert('Tem a certeza que pretende remover esse produto?');
  }

  const handleListProduct = () => {
    alert('Lista de produtos');
  }
  return ( 
    <div className={styles.container}>
     <Header /> 
      <main className={styles.main}> 
      {products.map}
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
