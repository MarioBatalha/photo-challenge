import type { NextPage } from 'next';
import styles from '../styles/Style.module.css';


const Footer: NextPage = () => {
  var date =  new Date();
  var year = date.getFullYear();

  return (
    <div>
      <footer className={styles.footer}>        
        <p 
         className={styles.footerText}>
         Copyright&copy; Mario Batalha - {year}
         </p>
        <p 
        className={styles.footerText}>
           Todos os Direitos Reservados
        </p>
      </footer>
    </div>
  )
}

export default Footer;