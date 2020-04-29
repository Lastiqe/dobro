import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.msg}>
                {props.message}
            </div>
            <div className={s.like}>
                likes {props.like}
            </div>
        </div>
    )
}
export default Post;