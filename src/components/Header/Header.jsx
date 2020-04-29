import React from 'react';
import Logo from '../../Pics/Logo/Kaban_logo.png';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__logo}>
                    <img src={Logo} className={s.logo} />
                </div>
                <div className={s.loginBlock}>
                    <NavLink to={props.isAuth ? '/me' : '/login'}>{props.isAuth ? <div onClick={props.LoggingOut}>logout</div> : 'login'}</NavLink>
                </div>
            </div>

        </header>
    )
}
export default Header;