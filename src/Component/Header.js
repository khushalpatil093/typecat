import React from "react";
import AccountCircle from "./AccountCircle";
import KeyboardIcon from '@mui/icons-material/Keyboard';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <KeyboardIcon/>
            </div>
            <div className="user-icon">
                <AccountCircle/>
            </div>
        </div>
    )
}

export default Header;