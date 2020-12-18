import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loggedInUser } from '../store/state';
import useFormValidation from './useFormValidation';

const useInscription = ({ firstNameRef, lastNameRef, emailRef, passwordRef, email, password, firstName, lastName }) => {
  const history = useHistory();
  const [loggedUser, setLoggedUser] = useRecoilState(loggedInUser);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { allFieldsAreValid } = useFormValidation({ inputRefs: [firstNameRef, lastNameRef, emailRef, passwordRef], inputValues : [firstName, lastName ,email, password] });
 const url = 'http://localhost:3000/api/signup';
// request options
const options = {
    method: 'POST',
    body: `email=${email}&password=${password}&firstName=${firstName}&lastName=${lastName}}`,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
  const signup = () => {
      setLoading(true);
      fetch(url ,options).then(response => 
      response.json()).then(response => {
          setLoading(false);
          if(response.success) {
            setLoggedUser(response);
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
    signup,
    loggedUser,
    error,
    loading,
    allFieldsAreValid
  }
}
export default useInscription;