import React from 'react';
import UserState from "../../../../Store/User/UserState";
import {observer} from "mobx-react-lite";
import './AvatarImg.css'

const AvatarImg = observer(() => {
    const avatarPath = "http://localhost:3030/" + UserState.avatar;

    return (
        <img className="IsLogged-avatar-image" src={UserState.avatar === '' ? "http://localhost:3030/default-icon.jpg" : avatarPath} alt="avatar"/>
    )
})

export default AvatarImg;