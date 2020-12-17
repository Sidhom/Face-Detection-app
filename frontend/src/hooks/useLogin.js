import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loggedInUser } from '../store/state';
import useFormValidation from './useFormValidation';

const useLogin = ({ emailRef, passwordRef, email, password }) => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { allFieldsAreValid } = useFormValidation({ inputRefs: [emailRef, passwordRef], inputValues : [email, password] });
  const [loggedUser, setLoggedUser] = useRecoilState(loggedInUser);
  
 const url = 'http://localhost:3000/api/signin';
// request options
const options = {
    method: 'POST',
    body: `email=${email}&password=${password}`,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
  const login = () => {
      setLoading(true);
      fetch(url ,options).then(response => 
      response.json()).then(response => {
          setLoading(false);
          if(response.success) {
            setLoggedUser(response.user);
            setError(null);
            localStorage.setItem('user', JSON.stringify(response.user));
            history.push("/Home");
          } else {
            setLoggedUser(null);
            setError(response.msg);
          }
      });
     return !!loggedUser;
  };
  return {
    login,
    loggedUser,
    error,
    loading,
    allFieldsAreValid
  }
}
export default useLogin;