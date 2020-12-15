import React from 'react';
import styles from './Button.module.css';

const Button = ({ style, action, label }) => (
    <div className={style}>
        <button className={ styles.buttonStyle } onClick = {() =>  action() }>{label}</button>
    </div>
)

export default Button;