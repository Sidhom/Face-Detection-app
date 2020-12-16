import React from 'react';
import logo from '../../logoFaceDetection.png';
import AuthMenu from '../AuthMenu';
import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.headerContainer}>
        <h3 className={styles.title}> FACE DETECTION </h3>
        <div className={styles.container}>
        <AuthMenu />
        <img src={logo} className={styles.faceLogo} alt="logo" />
        </div>
        </div> 
    </header>
)

export default Header;
