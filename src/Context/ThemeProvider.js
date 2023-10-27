import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSelector = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <label htmlFor="theme-select">Select Theme:</label>
            <select
                id="theme-select"
                value={theme}
                onChange={() => toggleTheme()}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    )
}

export default ThemeSelector;