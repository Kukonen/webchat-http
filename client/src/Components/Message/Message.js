import React from 'react'
import './Message.css'
import MessageImage from "./MessageImage/MessageImage";

const Message = (props) => {

    const {login, date, avatar, text, images} = props

    const array = date.split(".")

    // let avatarPath = MessagesState.getUserAvatar()

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
            {images !== null ? <MessageImage {...{images}} /> : null}
            <hr/>
        </div>
    )
}

export default Message;
