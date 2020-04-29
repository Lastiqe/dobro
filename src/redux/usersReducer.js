import { UsersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_LOADING_STATUS_AC = 'SET_LOADING_STATUS_AC'
const SET_LOADING_PROCESS_STATUS_AC = 'SE_LOADING_PROCESS_STATUS_AC'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    disableWhileLoad: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, followed: true }
                    }
                    return users
                })
            }

        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, followed: false }
                    }
                    return users
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case CHANGE_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }

        case SET_LOADING_STATUS_AC: {
            return {
                ...state,
                isFetching: action.status
            }
        }

        case SET_LOADING_PROCESS_STATUS_AC: {

            return {
                ...state,
                disableWhileLoad: action.status
                    ? [...state.disableWhileLoad, action.userId]
                    : [state.disableWhileLoad.filter(id => id != action.userId)]
            }
        }
        default: return state

    }

}


export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const changePage = (currentPage) => ({ type: CHANGE_PAGE, currentPage })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const setLoadingStatus = (status) => ({ type: SET_LOADING_STATUS_AC, status })
export const loadingProcess = (status, userId) => ({ type: SET_LOADING_PROCESS_STATUS_AC, status, userId })




export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setLoadingStatus(true))
    let data = await UsersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(setLoadingStatus(false))

}

export const setChangePage = (page, pageSize) => async (dispatch) => {

    dispatch(setLoadingStatus(true))
    dispatch(changePage(page))
    let data = await UsersAPI.getUsers(page, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setLoadingStatus(false))

}


export const unfollowUser = (userId) =>
    async (dispatch) => {

        let data = await UsersAPI.unfollowUser(userId)
        if (data.resultCode == 0) {
            dispatch(unfollow(userId))
        }
        dispatch(loadingProcess(false, userId))

    }


export const followUser = (userId) =>
    async (dispatch) => {

        let data = await UsersAPI.followUser(userId)
        if (data.resultCode == 0) {
            dispatch(follow(userId))
        }
        dispatch(loadingProcess(false, userId))

    }





export default usersReducer