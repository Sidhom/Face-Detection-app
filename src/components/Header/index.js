import React from 'react';
import logo from '../../logoFaceDetection.png';
import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.headerContainer}>
        <h3 className={styles.title}> FACE DETECTION </h3>
        <img src={logo} className={styles.faceLogo} alt="logo" />
        </div> 
    </header>
)

export default Header;
