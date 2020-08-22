import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updatePassword } from '../../actions/profile';
import { Link } from 'react-router-dom';

const ChangeLogin = ({ updatePassword }) => {
    const [editing, setEditing] = useState(false);
    const [showSave, setSave] = useState("saveButtonHide");
    const [showCancel, setCancel] = useState("cancelButtonHide");

    const [oldPW, setOldPW] = useState('');
    const [newPW, setNewPW] = useState('');
    const [conPW, setConPW] = useState('');

    const swapper = () => {
        setEditing(!editing);
        if (showSave === "saveButtonHide") {
            setSave("saveButton");
        } else {
            setSave("saveButtonHide");
        }
        if (showCancel === "cancelButtonHide") {
            setCancel("cancelButton");
        } else {
            setCancel("cancelButtonHide");
        }
    }

    const cancelSave = () => {
        setEditing(!editing);
        setSave("saveButtonHide");
        setCancel("cancelButtonHide");
        setNewPW('');
        setOldPW('');
        setConPW('');
    }

    const save = () => {
        if (newPW !== conPW) {
            return;
        }
        if (newPW === '') {
            return;
        }
        const data = {
            "old_password": oldPW,
            "new_password": newPW
        }

        updatePassword(data);
        setEditing(!editing);
        setSave("saveButtonHide");
        setCancel("cancelButtonHide");
        setNewPW('');
        setOldPW('');
        setConPW('');

        console.log("success");
    }

    const swap = (condition) => {
        switch(condition) {
            case true:
                return (
                    <div className="formGroup">
                        <div className="formElement">
                        <p>
                            Current password
                        </p>
                        <input
                            className="userInput"
                            value={oldPW}
                            onChange={e => setOldPW(e.target.value)}
                            type="password"
                        />
                        </div>
                        <div className="formElement">
                        <p>
                            New password
                        </p>
                        <input
                            className="userInput"
                            value={newPW}
                            onChange={e => setNewPW(e.target.value)}
                            type="password"
                        />
                        </div>
                        <div className="formElement">
                        <p>
                            Confirm new password
                        </p>
                        <input
                            className="userInput"
                            value={conPW}
                            onChange={e => setConPW(e.target.value)}
                            type="password"
                        />
                        </div>
                        <Link to="/recovery" className="subtitle">Forgot password?</Link>
                    </div>
                );

            case false:
                return (
                    <div className="changePassword">
                        <div className="changePasswordHeader">
                            <h3>Change Password</h3>
                            <button
                            onClick={swapper}
                            >
                                Edit
                            </button>
                        </div>
                        It’s a good idea to use a strong one that you aren’t using elsewhere!
                    </div>
                );
        }
    }

    return (
        <div className="changeLogin">
            <h3>Password</h3>
            <div className="admin-text">
                Change your password - use 8 or more characters with a mix of letters, numbers, and symbols!
            </div>
            <div className="formGroup">
                {swap(editing)}
            </div>
            <button className={showSave} onClick={save}>
                Save changes
            </button>
            <button className={showCancel} onClick={cancelSave}>
                Cancel
            </button>
        </div>
    )
}

export default connect(null, { updatePassword })(
    ChangeLogin
  );