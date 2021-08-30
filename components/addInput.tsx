import type { NextPage } from 'next';
import React, { useState } from 'react';
import axios from 'axios'; 

import { BiPlus } from "react-icons/bi";

import styles from '../styles/Style.module.css';

const Home: NextPage = () => {
  const [file, setFile] = useState('');

  const handleAddProduct = (e: any) => {
    e.preventDefault();

    const data = new FormData();
    data.append('image_url', file);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }, 
    };

    const api = 'http://localhost:3333/AddProduct';

    axios.post(api, data, config).then(res => {
      alert(`Image added successfully`);
    }).catch(err => {
      alert(`Error adding image`);
    })
  };

  const handleInputChange = (e: any) => {
    setFile(e.target.files[0]);
  }

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <span className={styles.label}>
          <BiPlus size={40} color='#25D366' className={styles.icon} />
        </span>        
         <form onSubmit={handleAddProduct}>
         <input 
          type="file"
          name="image_url"
          className={styles.uploadBox}
          onChange={handleInputChange} />    
         </form>
      </div>
    </div>
  );
};

export default Home;
