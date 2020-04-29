import React from 'react'
import preloader from './../../../assets/images/Spinner-1s-200px.svg'
import s from './Preloader.module.css'

export let Preloader = () => {
    return <img src={preloader} className={s.preloader} />
}

