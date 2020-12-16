import { useEffect, useState } from "react";

const useFormValidation = ({ inputRefs, inputValues }) => {
    const [allFieldsAreValid, setAllFieldsAreValid] = useState(false);
    useEffect(() => {
        let validationResult = inputRefs.map((inputRef) => {
        if(inputRef && inputRef.current) {
            return inputRef.current.checkValidity();
        }
    }).reduce((accumulator, currentValue) => accumulator + currentValue) === inputRefs.length;
    setAllFieldsAreValid(validationResult);
    },[...inputValues]);

    return {
            allFieldsAreValid
            } 
}

export default useFormValidation;
