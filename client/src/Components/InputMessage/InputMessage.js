import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './InputMessage.css'
import {observer} from "mobx-react-lite";

const InputMessage = observer(() => {

    return (
        <div>
            <div className="InputMessage">
            <div className="InputMessage-block">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Message" aria-label="Имя получателя"
                           aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" >Image</button>
                            <input type="file" className="InputMessage-file"/>
                            <button className="btn btn-outline-secondary" type="button">Send</button>
                        </div>
                </div>
            </div>
            </div>
        </div>

    )
})

export default InputMessage;