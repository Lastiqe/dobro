import { Redirect } from "react-router-dom"
import React from 'react'
import { connect } from "react-redux"
import { getAuthentification } from './../redux/authReducer'

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})
export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {

        render() {

            if (!this.props.isAuth) {
                return <Redirect to='/login' />
            } else return <Component {...this.props}

            />
        }

    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect, { getAuthentification })(RedirectComponent)
    return ConnectedAuthRedirectComponent
}




