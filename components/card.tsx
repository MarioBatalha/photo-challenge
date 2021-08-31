import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
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
  const [file, setFile] = useState<any>([]);
  const [product, setProduct] = useState<any>([]);;

  useEffect(() => {
    const api = 'http://localhost:3333/products';

    axios.get(api).then(res => {
      setFile(res.data);
     }).catch(err => {
       console.log(`No image founded`);
     });   
  }, []);

  const handleRemoveProduct = () => {    
    try {
      if(window.confirm('Você tem certeza que deseja deletar essa imagem?')){

        axios.delete(`http://localhost:3333/products`)
        .then((res) => {
          return res.data;
        })   
      }
  }catch(error) {
    console.log('Error to delete');
  }
}

  return ( 
    <div className={styles.container}>
     <Header /> 
      <main className={styles.main}> 
      {file.map((item: any) => (
        <article 
        key={item.id}
          className={styles.card}>
          <Image
           src={first}
           className={styles.image}/>
           <h4 className={styles.imageTitle}>{item.image_url}</h4>
          <button 
           className={styles.removeButton}
           onClick={handleRemoveProduct}>
            <AiOutlineCloseCircle size={30} />
          </button>
        </article> 
      ))}
       <AddButton />
      </main>

      <Footer />
    </div>
  )
}

export default Card;
