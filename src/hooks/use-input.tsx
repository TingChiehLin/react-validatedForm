import {useState, ChangeEvent, FormEvent} from "react";

interface useInputType {
    value: string,
    isValid: boolean,
    hasError: boolean,
    valueChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    inputBlurHandler: (event: FormEvent<HTMLInputElement>) => void,
    reset: () => void
}

const useInput = (validateValue:Function) => {

    const [enteredValue, setEnteredValue] = useState<string>('')
    const [isTouched, setIsTouched] = useState<boolean>(false)

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

    const userInputData: useInputType = {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

    return userInputData
};

export default useInput;

