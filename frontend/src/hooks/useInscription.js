import { useState } from 'react';
import useFormValidation from './useFormValidation';

const useInscription = ({ firstNameRef, lastNameRef, emailRef, passwordRef, email, password, firstName, lastName }) => {
  const [user, setUser] = useState(null);
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
    signup,
    user,
    error,
    loading,
    allFieldsAreValid
  }
}
export default useInscription;