import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Style.module.css'



const Header: NextPage = () => { 
  return (
    <div>
      <header className={styles.header}>
        <h1 
          className={styles.title}>
          Photo challenge
        </h1>
      </header>   
    </div>
  )
}

export default Header;
