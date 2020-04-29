import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { reduxForm, Field } from 'redux-form';
import { required, maxlengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../Common/FormControls/FormControls';


const PostTextForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'textarea'}
                component={Textarea}
                placeholder={'что у вас нового'}
                validate={[required]}>
            </Field>
            <button type={'submit'}>Add Post</button>
        </form>
    )
}


const MyPosts = (props) => {



    const ReduxPostTextForm = reduxForm({
        form: 'postTextForm'
    })(PostTextForm)

    let posts = props.posts.map(p => <Post message={p.message} key={p.id} like={p.likesCount} />
    )


    const onSubmit = (value) => {
        console.log(value.textarea);
        props.addPost(value.textarea)
    }
    return (
        <div>
            <ReduxPostTextForm onSubmit={onSubmit} />
            <div className={s.posts}>
                {posts}
            </div>
        </div >

    )
}







export default MyPosts;