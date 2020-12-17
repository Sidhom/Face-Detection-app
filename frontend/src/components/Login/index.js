import React, { useRef } from 'react';
import useFormInput from '../../hooks/useFormInput';
import useLogin from '../../hooks/useLogin';
import Button from '../Button';
import Input from '../Input';
import styles from './Login.module.css';
 
const Login = () => {
  const email = useFormInput('');
  const password = useFormInput('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login,  error, loading, allFieldsAreValid } = useLogin({ emailRef, passwordRef,  email: email.value, password: password.value });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign in to FACE DETECTION</h1>
      <div className={styles.inputContainer}>
       <div className={`${styles.email} ${styles.label}`}> Email  </div>
       <div className={styles.input}>
        <Input ref={emailRef} type="email" values={email} autoComplete="email" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required={true} />
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
      <div className={styles.inputContainer}>
      <div className={styles.label}>  Password </div>
            <div className={styles.input}>
                <Input ref={passwordRef} type="password" values={password} autoComplete="new-password"  required={true} />
            </div>
      </div>
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <Button label={loading ? 'Loading...' : 'Login'} action={login} disabled={loading || !allFieldsAreValid} />
    </div>
  );
}
 
export default Login;