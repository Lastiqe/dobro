import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field, reset } from 'redux-form';
import { Textarea } from '../Common/FormControls/FormControls';



const addMessage = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'textarea'} className={s.textArea}></Field >
            <button className={s.postBtn} type={'submit'} >Send</button>
        </form>
    )
}

const AddMessageForm = reduxForm({
    form: 'addMessage'
})(addMessage)



const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} key={dialogs.id} />)

    let messagesElements = props.messagesPage.messages.map(messages => {
        return (<Message
            msg={<div className={messages.mySide ? s.mySide : s.side}> {messages.message} </div>}
            id={messages.id}
            key={messages.id} />)
    })

    const onSubmit = (value) => {
        props.addMessage(value.textarea)
        props.reset('addMessage');
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messagesArea}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <AddMessageForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}


export default Dialogs;