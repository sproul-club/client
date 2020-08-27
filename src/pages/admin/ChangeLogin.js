import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updatePassword } from '../../actions/profile';
// import { Link } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import {NotificationManager, NotificationContainer} from 'react-notifications';

const ChangeLogin = ({ updatePassword }) => {
    const [editing, setEditing] = useState(false);
    const [showSave, setSave] = useState("saveButtonHide");
    const [showCancel, setCancel] = useState("cancelButtonHide");

    const [conError, setConError] = useState('conErrorNone');
    const [conInvalid, setConInvalid] = useState('userInput');

    const [oldPW, setOldPW] = useState('');
    const [newPW, setNewPW] = useState('');
    const [conPW, setConPW] = useState('');

    const setEditingMode = (edit) => {
        setEditing(edit);

        setSave(edit ? 'saveButton' : 'saveButtonHide');
        setCancel(edit ? 'cancelButton' : 'cancelButtonHide');

        if (!edit) {
            setNewPW('');
            setOldPW('');
            setConPW('');
        }
    }

    const openEdit = () => {
        setEditingMode(true);
    }

    const conChange = (event) => {
        setConPW(event.target.value);
        setConInvalid('userInput');
        setConError('conErrorNone');
      };

    const cancelSave = () => {
        setEditingMode(false);
        setConInvalid('userInput');
        setConError('conErrorNone');
    }

    const save = async () => {
        if (newPW !== conPW || newPW ==='') {
            setConInvalid('conInputInvalid');
            setConError('conError');
            return;
        }

        const data = {
            "old_password": oldPW,
            "new_password": newPW
        }

        updatePassword(data, function() {
            NotificationManager.success('Password successfully changed!', '', 3000);
            setEditingMode(false);
        },
        function(msg){
            NotificationManager.error(msg, 'Password change unsuccessful!', 3000);
        });

    }

    const swap = (editingMode) => {
        if (editingMode) {
            return (
                <div>
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
                        className={conInvalid}
                        value={conPW}
                        onChange={conChange}
                        type="password"
                    />
                    </div>
                    <div className={conError}>
                        Passwords don't match or left blank.
                    </div>
                </div>
            );
        } else {
            return (
                <div className="changePassword">
                    <div className="changePasswordHeader">
                        <h3>Change Password</h3>
                        <button onClick={openEdit}>
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
                Change your password - password must be at least 8 characters, include 1 number, and include 1 symbol!
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
            <NotificationContainer />
        </div>
    )
}

export default connect(null, { updatePassword })(
    ChangeLogin
  );
