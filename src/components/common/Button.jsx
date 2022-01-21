import React from "react";

import "./Button.css"

const Button = ({onClick, classStyle = "", filled = true, ...props}) => {

    const btnStyles = () => {
        const defaultStyle = "btn";
        const color = filled ? "filled" : "outlined";
        const extraClasses = classStyle;
        const result = `${defaultStyle} ${color} ${extraClasses}`;
        return result;
    }

    return (
        <button
            onClick={onClick}
            className={btnStyles()}
            type={props.type}
            form={props.form}
        >
            {props.children}
        </button>
    )
}

export default Button