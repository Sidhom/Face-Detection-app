import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthMenu.module.css';

const AuthMenu = () => (
    <div className={styles.container}>
      <Link className={styles.link} to='/Login' >Sign in</Link>
      <Link className={styles.link} to='/Inscription'>Sign up</Link>
  </div>
)
   
export default AuthMenu;
      
    

  