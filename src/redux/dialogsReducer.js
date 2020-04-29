const ADD_MESSAGE = 'ADD-MESSAGE'


let initialState = {
    messages: [
        { id: 1, mySide: true, message: 'Добро' },
        { id: 2, mySide: true, message: 'Услышал тебя' },
        { id: 3, mySide: false, message: 'Обнял' },
        { id: 4, mySide: true, message: 'На созвоне' },
        { id: 5, mySide: false, message: 'Обнял' },
        { id: 10, mySide: true, message: 'Добро' },
        { id: 20, mySide: true, message: 'Услышал тебя' },
        { id: 30, mySide: false, message: 'Обнял' },
        { id: 40, mySide: true, message: 'На созвоне' },
        { id: 31, mySide: false, message: 'Обнял' }
    ],
    dialogs: [
        { id: 1, name: 'Даня' },
        { id: 2, name: 'Саша' },
        { id: 3, name: 'Женя' },
        { id: 4, name: 'Ваня' },

    ],

}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let randomId = () => {
                return (Math.floor(Math.random() * (10000 - 1 + 1)) + 1)
            }

            let newMessage = {
                id: randomId(),
                mySide: true,
                message: action.message
            }
            if (newMessage.message != '') {
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                }

            } else {
                return { ...state }
            }


        }



        default: return state;


    }


}

export let addMessage = (message) => ({ type: ADD_MESSAGE, message })




export default dialogReducer