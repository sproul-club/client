import React, { useState } from 'react';

const ChangeLogin = () => {
    const [editing, setEditing] = useState(false);
    const [showSave, setSave] = useState("saveButtonHide");
    const [showCancel, setCancel] = useState("cancelButtonHide");

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
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            type="password"
                        />
                        </div>
                        <div className="formElement">
                        <p>
                            New password
                        </p>
                        <input
                            className="userInput"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            type="password"
                        />
                        </div>
                        <div className="formElement">
                        <p>
                            Confirm new password
                        </p>
                        <input
                            className="userInput"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            type="password"
                        />
                        </div>
                        <a href="/recovery" className="subtitle">
                            Forgot your password?
                        </a>
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
            <button className={showSave} onClick={swapper}>
                Save changes
            </button>
            <button className={showCancel} onClick={swapper}>
                Cancel
            </button>
        </div>
    )
}
export default ChangeLogin ;