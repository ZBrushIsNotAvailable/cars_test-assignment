import React from "react";

import './Header.css';

import logo from '../../resourses/images/logo.svg';
import exitIco from '../../resourses/images/exit.svg';
import IconButton from "../common/IconButton";

const Header = ({userName}) => {

    return (
        <header className="header">
            <div className="logo">
                <img src={logo}
                     alt={"logo"}
                     className="logo__img"
                />
                <p className="logo__text">Logo</p>
            </div>
            <div className="controls">
                <p className="controls__username">{userName || "Log in"}</p>
                <IconButton classStyle={"controls__btn"} iconSrc={exitIco} alt="exit_icon"/>
            </div>
        </header>
    )
}

export default Header