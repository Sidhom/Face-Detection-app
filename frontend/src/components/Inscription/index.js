import React, { useRef } from 'react';
import useFormInput from '../../hooks/useFormInput';
import useInscription from '../../hooks/useInscription';
import Button from '../Button';
import Input from '../Input';
import styles from './Inscription.module.css';
 
const Inscription = ({ history }) => {

  const email = useFormInput('');
  const password = useFormInput('');
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const { signup, user,  error, loading, allFieldsAreValid} = useInscription({ firstNameRef, lastNameRef, passwordRef, emailRef, email: email.value, password: password.value, firstName: firstName.value, lastName: lastName.value, });

  const handleSignUp = () => {
    const connected = signup();
    console.log('user', user)
    if(connected) history.push('/Home');  
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign up to FACE DETECTION</h1>
      <div className={styles.inputContainer}>
       <div className={styles.label}> FirstName  </div>
       <div className={styles.input} >
        <Input ref={firstNameRef} type="text" values={firstName} autoComplete="given-name" required={true} />
        </div>
      </div>
      <div className={styles.inputContainer}>
       <div className={styles.label}> LastName  </div>
       <div className={styles.input}>
        <Input ref={lastNameRef} type="text" values={lastName} autoComplete="family-name" required={true} />
        </div>
      </div>
      <div className={styles.inputContainer}>
      <div className={`${styles.email} ${styles.label}`}> Email  </div>
       <div className={styles.input}>
        <Input ref={emailRef} type="email" values={email} autoComplete="email" required={true} />
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
      <div className={styles.inputContainer}>
      <div className={styles.label}>  Password </div>
            <div className={styles.input}>
                <Input ref={passwordRef} type="password" values={password} autoComplete="new-password" required={true} />
            </div>
      </div>
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <Button label={loading ? 'Loading...' : 'SIGN UP'} action={handleSignUp} disabled={loading || !allFieldsAreValid} />
    </div>
  );
}
 
export default Inscription;