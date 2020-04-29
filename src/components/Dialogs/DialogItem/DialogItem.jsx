import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {



    let path = `/dialogs/${props.id}` //выносим путь в переменную

    return (
        <div >
            <NavLink to={path} className={s.dialogItem} activeClassName={s.activeLink} >{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;

