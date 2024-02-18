import React from "react";
import AccountCircle from "./AccountCircle";
import KeyboardIcon from '@mui/icons-material/Keyboard';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <KeyboardIcon/>
                <div>
                    <span className="headName">typecat</span>
                </div>
            </div>
            <div className="user-icon">
                <AccountCircle/>
            </div>
        </div>
    )
}

export default Header;