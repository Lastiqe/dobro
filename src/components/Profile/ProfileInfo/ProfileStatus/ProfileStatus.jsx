import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: ''
    }


    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }


    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {

        return (
            <div>
                <div>{this.state.editMode &&
                    <div className={s.statusModule} onBlur={this.deactivateEditMode} >
                        <div className={s.statusWrapper}>
                            <textarea
                                className={s.statusText}
                                autoFocus={true}
                                value={this.state.status}
                                onChange={this.onStatusChange}>
                                {this.props.status}
                            </textarea>
                            <button className={s.saveButton} onClick={this.deactivateEditMode}>СХОРОНИТЬ</button>
                        </div>
                    </div>
                }

                    <div>
                        <div onDoubleClick={this.activateEditMode} className={s.statusArea}>{this.props.status}</div>
                    </div>

                </div>
            </div>
        )
    }
}



export default ProfileStatus