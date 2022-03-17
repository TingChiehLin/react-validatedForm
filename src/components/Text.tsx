import {FC} from "react";

interface textProps {
    text: string,
    customStyle: string
}

const Text:FC<textProps> = ({text, customStyle}) => {
    return (
        <div className={customStyle}>
            {text}
        </div>
    )
}

export default Text;
