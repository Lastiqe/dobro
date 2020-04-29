import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/userPhoto.png'
import { NavLink } from 'react-router-dom';
import { Paginator } from './../Common/Paginator/Paginator'




let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    //   {
    //                     pages.map(page => {

    //                         return <span
    //                             className={props.currentPage === page ?
    //                                 s.selectedPage : s.simplePage}
    //                             onClick={(event) =>
    //                                 props.onPageChanged(page)}>
    //                             {page}
    //                         </span>
    //                     })}

    return (
        <div>
            {
                props.users.map(user => (
                    <div className={s.user} key={user.id}>
                        <div >
                            <NavLink to={`/profile/${user.id}`}>
                                <img
                                    src={user.photos.small != null ? user.photos.small : userPhoto}
                                    className={s.userPhoto} />
                            </NavLink>

                        </div>
                        <div className={s.btn}>
                            {user.followed ?
                                <button
                                    disabled={props.disableWhileLoad.some(id => id === user.id)}
                                    onClick={() => {
                                        props.loadingProcess(true, user.id)
                                        props.unfollowUser(user.id)
                                    }}>unfollow</button>
                                : <button disabled={props.disableWhileLoad.some(id => id === user.id)} onClick={() => {

                                    props.loadingProcess(true, user.id)

                                    props.followUser(user.id)
                                }} className={s.btnl}>follow</button>
                            }

                        </div>
                        <div className={s.userInfo}>
                            <div>{user.name}</div>
                            <div>{user.lastname}</div>
                            <div>{user.country}</div>
                            <div>{user.town}</div>
                        </div>


                    </div>))
            }
            <div className={s.paginator}>
                <Paginator onPageChanged={props.onPageChanged} pages={pages.length} />
            </div>
        </div >
    )
}

export default Users