import { useState } from 'react';
import useFormValidation from './useFormValidation';

const useLogin = ({ emailRef, passwordRef, email, password }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { allFieldsAreValid } = useFormValidation({ inputRefs: [emailRef, passwordRef], inputValues : [email, password] });
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
            setUser(response);
            setError(null);
          } else {
            setUser(null);
            setError(response.msg);
          }
      });
     return !!user;
  };
  return {
    login,
    user,
    error,
    loading,
    allFieldsAreValid
  }
}
export default useLogin;