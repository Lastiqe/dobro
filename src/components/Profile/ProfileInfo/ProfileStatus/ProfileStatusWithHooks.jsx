import React from 'react'
import s from './ProfileStatus.module.css'
import { useState, useEffect } from 'react'


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)

    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        console.log(`установка статуса`);
        setEditMode(false)
        props.updateStatus(status)
    }

    const changingStatus = (e) => {

        setStatus(e.currentTarget.value)

    }



    return (
        <div>
            <div >{editMode &&
                <div className={s.statusModule} onBlur={deactivateEditMode}>
                    <div className={s.statusWrapper} >
                        <textarea className={s.statusText} onChange={changingStatus} value={status}>

                        </textarea>
                        <button className={s.saveButton} onClick={deactivateEditMode}>СХОРОНИТЬ</button>
                    </div>
                </div>
            }
                {!editMode &&
                    <div>
                        <div className={s.statusArea} onDoubleClick={activateEditMode}>{props.status}</div>
                    </div>
                }


            </div>
        </div>
    )

}



export default ProfileStatusWithHooks