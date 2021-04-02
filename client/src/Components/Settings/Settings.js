import React from "react";
import './Settings.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingsState from "../../Store/Settings/SettingsState";
import {observer} from "mobx-react-lite";

const Settings = observer(() => {

    return (
        <div className="settings-block">
            <h2>Settings</h2>
            <br/>
            <h3>Change avatar</h3>
            <div className="custom-file settings-change-avatar-input-block">
                <input type="file" className="custom-file-input" id="customFileLang" lang="ru" accept="image/*" onChange={e => SettingsState.changeFile(e)}/>
                    <label className="custom-file-label" htmlFor="customFileLang">{SettingsState.avatarPath !== "" ? SettingsState.avatarPath : "Select a file"}</label>
                <br/> <br/>
                <button type="button" className="btn btn-outline-secondary" onClick={() => SettingsState.changeAvatar()}>Change</button>
            </div>
            <a href="/" className="badge badge-light settings-back-link">BACK</a>
        </div>
    )
});

export default Settings;