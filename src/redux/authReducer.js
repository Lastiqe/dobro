import { loginAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA'
const LOGGING_IN_STATUS = 'LOGGING_IN_STATUS'
const LOGGING_OUT_SUCCESS = 'LOGGING_OUT_SUCCESS'





let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: null,
    LoggingIn: null,
    LoggingOut: null,


}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,

            }

        }

        case LOGGING_IN_STATUS: {
            return {
                ...state,
                LoggingIn: action.status
            }
        }

        case LOGGING_OUT_SUCCESS: {

            return {
                ...state,
                LoggingOut: action.status,


            }

        }



        default: return state

    }

}

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const setLoggingInStatus = (status) =>
    ({ type: LOGGING_IN_STATUS, status })
export const setLoggingOutStatus = (status) =>
    ({ type: LOGGING_OUT_SUCCESS, status })


export const getAuthentification = () => async (dispatch) => {

    let data = await loginAPI.me()

    if (data.resultCode === 0) {
        let { id, login, email } = data.data
        dispatch(setAuthUserData(id, email, login, true))

    }

}

export const LoggingIn = (formData) => async (dispatch) => {

    let data = await loginAPI.login(formData)

    if (data.resultCode === 0) {
        dispatch(setLoggingInStatus(true))
        dispatch(getAuthentification())
        alert('Авторизация успешна')
    } else if (data.resultCode === 1) {
        dispatch(stopSubmit("Login", { _error: `${data.messages}` }))
    } else if (data.resultCode === 10) {
        dispatch(setLoggingInStatus(false))
        alert('Требуется каптча')
    }

}
export const LoggingOut = () => async (dispatch) => {
    let response = await loginAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setLoggingOutStatus(true))
        dispatch(setAuthUserData(null, null, null, false))
        alert('Вы вышли')
    } else {
        dispatch(setLoggingOutStatus(false))
        alert('Что-то не так с выходом')
    }

}







export default authReducer