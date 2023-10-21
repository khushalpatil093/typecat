import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    background : skyblue;
}

.upper-menu{
    display: flex;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.2rem;
    justify-content: space-between;
    padding: 1rem;
}

.modes{
    display: flex;
    gap: 0.5rem;
}

.time-mode:hover{
    color: green;
    cursor: pointer;
}

`