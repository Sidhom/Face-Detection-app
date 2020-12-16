import React from 'react';
import styles from './Button.module.css';

const Button = ({ style, action, label, disabled }) => (
    <div className={style}>
        <button className={ disabled ? styles.disabled : styles.buttonStyle} disabled={disabled} onClick = {() =>  action() }>{label}</button>
    </div>
)

export default Button;