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
                    <input type="text" className="form-control InputMessage-text-input" placeholder="Message"  value={InputMessageState.text}
                           aria-describedby="basic-addon2" onChange={(event) => InputMessageState.changeText(event.target.value)}/>
                </div>
                <div className="input-group-2">
                    <div className="custom-file InputMessage-images-block">
                        <input type="file" className="custom-file-input InputMessage-images-input" id="customFileLang" lang="ru" accept="image/*" onChange={e => InputMessageState.changeImg(e)}/>
                        <label className="custom-file-label InputMessage-images-label" htmlFor="customFileLang" />
                    </div>
                    <div className="input-group-append InputMessage-submit-button">
                        <button className="btn btn-outline-secondary" type="button" onClick={() => InputMessageState.sendMessage()}>Send</button>
                    </div>
                </div>



            </div>
            </div>
        </div>

    )
})

export default InputMessage;