import React from 'react'
import './Message.css'

const Message = (props) => {

    const {login, date, avatar, text} = props

    const array = date.split(".")

    // let avatarPath = MessagesState.getUserAvatar()

    console.log(avatar)

    const avatarURL = avatar === '' ? "http://localhost:3030/default-icon.jpg" : "http://localhost:3030/" + avatar;

    return (
        <div className="Message">
            <div className="Message-information-block">
                <img src={avatarURL} alt="avatar" className="Message-avatar-img"/>&nbsp;&nbsp;
                <span className="Message-username">{login}</span>
                <span className="Message-date">{array[3]}:{array[4]}</span>
            </div>
            <div className="Message-text-block">
                <span className="Message-text">{text}</span>
            </div>
            <br/>
            <hr/>
        </div>
    )
}

export default Message;
