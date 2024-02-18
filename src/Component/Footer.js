import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
// import Select from 'react-select';
// import { themeOptions } from "../Utils/themeOptions";
// import { useTheme } from "../Context/ThemeContext";

const Footer = () => {

    // const { theme } = useTheme();

    return (
        <div className="footer">
            <div className="links">
                <a href="https://github.com/khushalpatil093/typecat"><GitHubIcon/></a>
            </div>
        
        </div>
    )
}

export default Footer;