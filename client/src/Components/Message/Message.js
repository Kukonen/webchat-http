import React from 'react'

import './Message.css'

const Message = (props) => {

    const {date, username, text} = props

    const array = date.split(".")

    return (
        <div className="Message">
            <div className="Message-information-block">
                <span className="Message-username">{username}</span>
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
