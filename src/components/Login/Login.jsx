import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { LoggingIn } from '../../redux/authReducer'
import { LoginTextArea } from '../Common/FormControls/FormControls'
import { Redirect } from 'react-router-dom'
import { emailCheck } from '../../utils/validators/validators'
import s from '../../components/Common/FormControls/FormControls.module.css'

const LoginForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'email'}
                    name={'email'}
                    component={LoginTextArea}
                    text={'введите email'}
                    validate={[emailCheck]}
                    validateText={'неверный формат'} />
            </div>
            <div>
                <Field placeholder={'password'}
                    name={'password'}
                    component={LoginTextArea}
                    text={'введите пароль'} />
            </div>
            <div>
                <Field type={'checkbox'}
                    name={'rememberMe'}
                    component={'input'} />
                    remember me
            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
            {props.error && <div className={s.errorArea}>{props.error} </div>}

        </form>

    )
}

const LoginReduxForm = reduxForm({
    form: 'Login',
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.LoggingIn(formData)
    }

    if (props.isAuth == true) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )

}


let mapStateToProps = (state) => {

    return ({
        auth: state.auth.LoggingIn,
        isAuth: state.auth.isAuth
    })
}

export default connect(mapStateToProps, { LoggingIn })(Login)