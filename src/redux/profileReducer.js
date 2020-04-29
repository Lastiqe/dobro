import { profileAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const CHANGE_STATUS_TEXT = 'CHANGE_STATUS_TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Здарова', likesCount: 12 },
        { id: 2, message: 'Как сам', likesCount: 5 }
    ],
    profile: {
        photos: {
            large: null
        },

    },
    status: '',


}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let randomId = () => {
                return (Math.floor(Math.random() * (10000 - 1 + 1)) + 1)
            }
            let newPost = {
                id: randomId(),
                message: action.postText
            }
            if (newPost.message != '') {


                return {
                    ...state,
                    posts: [...state.posts, newPost]

                }

            } else {
                return { ...state }
            }

        }

        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }


        default: return state
    }

}

export let addPost = (postText) => ({ type: ADD_POST, postText })
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export let setStatus = (status) => ({ type: SET_STATUS, status })
export let changeStatusText = (newStatusText) => ({ type: CHANGE_STATUS_TEXT, newStatusText })

//THUNKS

export const getUserProfile = (userId) => async (dispatch) => {

    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data))

}

export const getStatus = (userId) => async (dispatch) => {

    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }

}

export default profileReducer
