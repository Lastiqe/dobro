import React from 'react';
import { connect } from 'react-redux';
import { loadingProcess, getUsers, unfollowUser, followUser, setChangePage } from '../../redux/usersReducer';
import Users from './Users';
import { Preloader } from './../Common/Preloader/Preloader'
import { Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import {
    getAllUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getDisableWhileLoad
} from '../../redux/usersSelectors'





class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.setChangePage(page, this.props.pageSize)
    }

    render() {
        if (this.props.isAuth == false) return <Redirect to={'/login'} />
        return <>

            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                loadingProcess={this.props.loadingProcess}
                disableWhileLoad={this.props.disableWhileLoad}
            />
        </>

    }

}
let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        disableWhileLoad: getDisableWhileLoad(state),

    }
}




export default compose(
    connect(mapStateToProps,
        { loadingProcess, getUsers, unfollowUser, followUser, setChangePage }),
    WithAuthRedirect
)(UsersContainer)





    // let mapDispatchToProps = (dispatch) => {

//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },

//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         changePage: (pageNum) => {
//             dispatch(changePageAC(pageNum))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         setLoadingStatus: (status) => {
//             dispatch(setLoadingStatusAC(status))
//         },


//     }
// }