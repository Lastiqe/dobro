import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/userPhoto.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                {props.profile.photos.large === null ? <img src={userPhoto} className={s.avatar} /> : <img src={props.profile.photos.large} alt="Енот" className={s.avatar} />}
            </div>


            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />


            </div>

        </div>
    )
}


export default ProfileInfo;