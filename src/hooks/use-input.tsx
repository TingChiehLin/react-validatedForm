import {useState, ChangeEvent, FormEvent} from "react";

const useInput = (validateValue:any) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (event: FormEvent<HTMLInputElement>) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
};

export default useInput;

