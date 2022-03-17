import {ChangeEvent, FocusEvent, FC} from "react";

interface InputProps {
    id: string,
    type: string,
    value: string,
    customStyle: string,
    onInputEvent: (event: ChangeEvent<HTMLInputElement>) => void,
    onBlurEvent: (event: FocusEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({id, type, value, customStyle, onInputEvent, onBlurEvent}) => {
    return <input id={id} type={type}
                  className={customStyle}
                  onChange={onInputEvent}
                  onBlur={onBlurEvent}
    />;
};

export default Input;
