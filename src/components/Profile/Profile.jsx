import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsСontainer';


const Profile = (props) => {

    return (

        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                updateStatus={props.updateStatus}
                status={props.status} />
            <MyPostsContainer />

        </div>
    )
}
export default Profile;