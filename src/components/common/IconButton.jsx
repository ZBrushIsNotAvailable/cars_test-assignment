import React from "react";

import "./IconButton.css"


const IconButton = ({iconSrc = "", alt = "icon", onClick, classStyle = "", ...props}) => {

    const btnStyles = () => {
        const defaultStyle = "icon-btn";
        return `${defaultStyle} ${classStyle}`;
    }

    return (
        <button className={btnStyles()} onClick={onClick} type={props.type}>
            <img src={iconSrc} alt={alt}/>
        </button>
    )
}

export default IconButton