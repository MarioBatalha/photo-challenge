import type { NextPage } from 'next';
import React, { useState } from 'react';
import axios from 'axios'; 

import { BiPlus } from "react-icons/bi";

import styles from '../styles/Style.module.css';

const Home: NextPage = () => {
  const [file, setFile] =  useState<any>([]);

  const handleAddProduct = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const data = new FormData();
    data.append('image_url', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }, 
    };

    const handleUploadImageToCurrentDirectory = () => {
      const api = 'http://localhost:3333/AddProductToCurrentDirectory';

      return  axios.post(api, data, config).then(res => {
        alert(`successfully image upload to current directory`);
      }).catch(err => {
        alert(`Error to upload image to current directory`);
      })
    }
    
    const handleUploadImageToDatabase = () => {
      const api = 'http://localhost:3333/AddProduct';

      return  axios.post(api, {
        image_url: file,
      }).then(res => {
        alert(`successfully image upload to database`);
      }).catch(err => {
        alert(`Error to upload image to database`);
      })
     
    }
    
    Promise.all([handleUploadImageToCurrentDirectory(), handleUploadImageToDatabase()])
      .then(function (results) {
        const acct = results[0];
        const perm = results[1];
      });
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
          <button
          type='submit' 
          className={styles.button}
          >add image
          </button>   
         </form>
      </div>
    </div>
  );
};

export default Home;
