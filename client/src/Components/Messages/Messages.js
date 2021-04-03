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

    const takeLastMessage = () => {
        if (MessagesState.messages.length !== 0) {
            let lastMessage = document.getElementsByClassName("Message");
            lastMessage[lastMessage.length - 1].scrollIntoView()
        }
    };

    return (
        <div id="Messages">
            {messages}
            {(MessagesState.isFirstOpen) ? takeLastMessage() : null}
        </div>
    )
})


export default Messages;