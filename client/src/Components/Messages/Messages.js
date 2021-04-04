import React from 'react'

import './Messages.css'
import MessagesState from "../../Store/Messages/MessagesState";
import Message from "../Message/Message";
import {observer} from "mobx-react-lite";

const Messages = observer(() => {

    const messages = MessagesState.messages.map((item) => {
        const login = item.login;
        const date = item.date;
        const avatar = item.avatar;
        const text = item.text;
        const images = item.images;
        return (
            <Message {...{login, date, avatar, text, images}} />
        )
    });

    const takeLastMessage = () => {
        if (MessagesState.messages.length !== 0 && MessagesState.messages.length !== 1) {
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