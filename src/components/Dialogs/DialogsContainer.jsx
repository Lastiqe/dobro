import React from 'react';
import Dialogs from './Dialogs.jsx'
import { addMessage, } from '../../redux/dialogsReducer.js';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect.js';
import { compose } from 'redux';
import { reset } from 'redux-form';




let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth,

    }
}


export default compose(
    connect(mapStateToProps, { addMessage, reset }),
    WithAuthRedirect
)(Dialogs)




