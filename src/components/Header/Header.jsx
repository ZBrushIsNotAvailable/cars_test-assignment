import React from "react";

import IconButton from "../common/IconButton";

import logoIco from '../../resourses/images/logo.svg';
import exitIco from '../../resourses/images/exit.svg';

import './Header.css';

const Header = ({userName}) => {

    return (
        <header className="header">
            <div className="logo">
                <img src={logoIco}
                     alt={"logo-icon"}
                     className="logo__img"
                />
                <p className="logo__text">Logo</p>
            </div>
            <div className="controls">
                <p className="controls__username">{userName || "Log in"}</p>
                <IconButton classStyle={"controls__btn"} iconSrc={exitIco} alt="exit-icon"/>
            </div>
        </header>
    )
}

export default Header