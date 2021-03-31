import React from 'react'

import './Message.css'

const Message = (props) => {

    const {date, userid, text} = props

    return (
        <div className="Message">
            <p>{date}</p>
            <p>{userid}</p>
            <p>{text}</p>
        </div>
    )
}

export default Message;
