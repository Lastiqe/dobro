import React from 'react'
import s from './FormControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {

    return (
        <div>
            <textarea {...input} {...props} />
        </div>
    )
}

export const LoginTextArea = ({ input, meta, ...props }) => {
    const isEmptyField = () => {

        if (meta.touched && !meta.active && !input.value) return true
        return false

    }
    return (
        <div>
            <div className={s.errorContainer}>
                <textarea {...input} {...props} className={isEmptyField() ? s.LoginTextAreaError : s.LoginTextArea} />
                {<span className={isEmptyField() ? s.errorOn : s.errorOf}>{props.text} </span>}
                {<span className={meta.error ? s.errorOn : s.errorOf}>{meta.error} </span>}
            </div>

        </div>
    )
}