import React from 'react'

import './Message.css'

const Message = (props) => {

    const {date, username, text} = props

    return (
        <div className="Message">
            <div className="Message-information-block">
                <span className="Message-username">{username}</span>
                <span className="Message-date">{date}</span>
            </div>
            <div className="Message-text-block">
                <span className="Message-text">{text}</span>
            </div>
        </div>
    )
}

export default Message;
