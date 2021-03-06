import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from './../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props} />
            </div>
        )
    }

}
let mapStateToprops = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
})

export default compose(
    connect(mapStateToprops, { getUserProfile, getStatus, updateStatus }),
    withRouter,
)(ProfileContainer)



