import {FC, FormEvent} from "react";
import Input from "../components/Input";
import Label from "../components/Label";

import useInput from "../hooks/use-input";

const isNotEmpty = (value: string) => value.trim() !== '';
const isEmail = (value: string) => value.includes('@');

const Form: FC = () => {

    const {
        value: enterName,
        isValid: enterNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(isNotEmpty);

    const {
        value: enterPassword,
        isValid: enterPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInput(isNotEmpty);

    const {
        value: enterConfirmPassword,
        isValid: enterConfirmPasswordIsValid,
        hasError: confirmPasswordInputHasError,
        valueChangeHandler: confirmPasswordChangedHandler,
        inputBlurHandler: confirmPasswordBlurHandler,
        reset: resetConfirmPasswordInput
    } = useInput(isNotEmpty);

    const {
        value: enterEmail,
        isValid: enterEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail);

    let formIsValid = false;

    const nameValidedClass = nameInputHasError ? "border-2 border-rose-500" : "";
    const emailValidedClass = emailInputHasError ? "border-2 border-rose-500" : "";
    const passwordValidedClass = passwordInputHasError ? "border-2 border-rose-500" : "";
    const confirmPasswordValidedClass = confirmPasswordInputHasError ? "border-2 border-rose-500" : "";
    const confirmPasswordNotTheSameClass= (enterPassword !== enterConfirmPassword)? "border-2 border-rose-500" : "";

    if (enterName && enterEmail && enterPassword && enterConfirmPassword) {
        formIsValid = true;
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!formIsValid) {
            return;
        }

        resetNameInput()
        resetEmailInput()
        resetPasswordInput()
        resetConfirmPasswordInput()
    }

    return (
        <form className={"w-full h-[40rem] p-16 bg-zinc-300 shadow-md rounded-md font-Source-Sans"}
              onSubmit={submitHandler}
        >
            <div className={"mb-2"}>
                <Label htmlFor={"name"} text={"Name"} customStyle={"text-xl font-[600] block mb-2"}/>
                <Input id={"name"}
                       type={"text"}
                       value={enterName}
                       customStyle={`w-full px-4 py-2 rounded-md outline-none 
                       ${nameValidedClass}`}
                       onInputEvent={nameChangedHandler}
                       onBlurEvent={nameBlurHandler}
                />
                {nameInputHasError &&
                <p className={"text-rose-500 font-[600] mt-1"}>
                    Name can not be empty
                </p>}
            </div>

            <div className={"mb-2"}>
                <Label htmlFor={"email"} text={"Email"} customStyle={"text-xl font-[600] block mb-2"}/>
                <Input id={"email"}
                       type={"email"}
                       value={enterEmail}
                       customStyle={`w-full px-4 py-2 rounded-md outline-none ${emailValidedClass}`}
                       onInputEvent={emailChangedHandler}
                       onBlurEvent={emailBlurHandler}
                />
                {emailInputHasError &&
                <p className={"text-rose-500 font-[600] mt-1"}>
                    Email does not include @
                </p>}
            </div>
            <div className={"mb-2"}>
                <Label htmlFor={"password"} text={"Password"} customStyle={"text-xl font-[600] block mb-2"}/>
                <Input id={"password"}
                       type={"password"}
                       value={enterPassword}
                       customStyle={`w-full px-4 py-2 rounded-md outline-none ${passwordValidedClass}`}
                       onInputEvent={passwordChangedHandler}
                       onBlurEvent={passwordBlurHandler}
                />
                {passwordInputHasError &&
                <p className={"text-rose-500 font-[600] mt-1"}>
                    Password can not be empty
                </p>}
            </div>
            <div className={"mb-2"}>
                <Label htmlFor={"confirmpassword"} text={"Confirm Password"}
                       customStyle={"text-xl font-[600] block mb-2"}/>
                <Input id={"confirmpassword"}
                       type={"password"}
                       value={enterConfirmPassword}
                       customStyle={`w-full px-4 py-2 rounded-md outline-none
                       ${confirmPasswordValidedClass} 
                       ${confirmPasswordNotTheSameClass}`}
                       onInputEvent={confirmPasswordChangedHandler}
                       onBlurEvent={confirmPasswordBlurHandler}
                />
                {confirmPasswordInputHasError &&
                <p className={"text-rose-500 font-[600] mt-1"}>
                    Confirm Password can not be empty
                </p>
                }

                {(enterPassword !== enterConfirmPassword) &&
                <p className={"text-rose-500 font-[600] mt-1"}>
                    password is not the same as confirm password
                </p>
                }

            </div>
            <button
                className={"px-12 py-3 bg-custom-blue rounded-md mt-10 mx-auto block font-[600] " +
                "text-white disabled:bg-gray-500"}
                disabled={!formIsValid}
            >
                Submit
            </button>
        </form>
    )
}

export default Form;
