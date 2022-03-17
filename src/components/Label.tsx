import {FC} from "react";

interface LabelProps {
    htmlFor: string,
    text: string,
    customStyle: string
}

const Label: FC<LabelProps> = ({htmlFor, text, customStyle}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={customStyle}
        >
            {text}
        </label>
    )
}

export default Label;
