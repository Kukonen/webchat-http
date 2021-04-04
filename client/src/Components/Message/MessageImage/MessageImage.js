import React from "react";
import './MessageImage.css'

const MessageImage = (props) => {

    const imageURL = "http://localhost:3030/" + props.images;

    return (
        <img src={imageURL} alt="image" className="message-images message-images-normal-size"/>
    )
}

export default MessageImage;