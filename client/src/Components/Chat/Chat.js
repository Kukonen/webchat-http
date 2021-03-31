import React from 'react'
import './Chat.css'
import Messages from "../Messages/Messages";
import InputMessage from "../InputMessage/InputMessage";

const Chat = () => {
    return (
        <div>
            <Messages />
            <InputMessage />
        </div>
    )
}

export default Chat;