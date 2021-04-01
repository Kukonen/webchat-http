import React from 'react'

import './Messages.css'
import MessagesState from "../../Store/Messages/MessagesState";
import Message from "../Message/Message";
import {observer} from "mobx-react-lite";

const Messages = observer(() => {

    const messages = MessagesState.messages.map((item) => {
        const id = item.id;
        const date = item.date;
        const username = item.username;
        const text = item.text;

        return (
            <Message key={id} {...{date, username, text}} />
        )
    });


    return (
        <div className="Messages">
            {messages}
        </div>
    )
})

export default Messages;