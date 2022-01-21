import React from "react";

import './Header.css';

import logo from '../../resourses/images/logo.svg';
import exit from '../../resourses/images/exit.svg';

const Header = ({isAuth, userName}) => {

    console.log(userName);

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
                <button className={"controls__btn"}><img src={exit} alt="exit_icon"/></button>
            </div>
        </header>
    )
}

export default Header