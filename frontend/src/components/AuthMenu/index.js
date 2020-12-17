import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useLogout from '../../hooks/useLogout';
import { loggedInUser } from '../../store/state';
import styles from './AuthMenu.module.css';


const AuthMenu = () =>{
  const { logout } = useLogout();
  const [loggedUser, setLoggedUser] = useRecoilState(loggedInUser);
  useEffect(() => {
   const user = localStorage.getItem('user');
      setLoggedUser(JSON.parse(user));
  },[])
  return (
          <div className={styles.container}>
               {loggedUser  ? 
              <Link className={styles.link} onClick={() => logout()} to='/'>Logout</Link>
            :(
              <Fragment>
                  <Link className={styles.link} to='/' >Sign in</Link>
                  <Link className={styles.link} to='/Inscription'>Sign up</Link>
              </Fragment>
            )}
          </div>
               )
} 
   
export default AuthMenu;
      
    

  