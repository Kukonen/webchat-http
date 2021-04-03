import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './InputMessage.css'
import {observer} from "mobx-react-lite";
import InputMessageState from "../../Store/InputMessage/InputMessageState";

const InputMessage = observer(() => {

    return (
        <div>
            <div className="InputMessage">
            <div className="InputMessage-block">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Message" aria-label="Имя получателя" value={InputMessageState.text}
                           aria-describedby="basic-addon2" onChange={(event) => InputMessageState.changeText(event.target.value)}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={() => InputMessageState.sendMessage()}>Send</button>
                        </div>
                </div>
            </div>
            </div>
        </div>

    )
})

export default InputMessage;