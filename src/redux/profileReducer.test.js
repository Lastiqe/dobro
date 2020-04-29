import profileReducer, { addPost } from "./profileReducer";
import React from 'react'


it('length of posts should be incremented', () => {
    //1. test data
    let action = addPost('TEST POST')
    let initialState = {
        posts: [
            { id: 1, message: 'Здарова', likesCount: 12 },
            { id: 2, message: 'Как сам', likesCount: 5 }
        ],

    }
    //2. action
    let newState = profileReducer(initialState, action)
    //3. expectation
    expect(newState.posts.length).toBe(3) //newState.posts.length === 5
})