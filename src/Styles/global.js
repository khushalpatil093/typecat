import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
}

body{
    background : #081426;
    color: #745D54;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
}

.canvas{
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-row: auto 1fr auto;
    gap: 0.5rem;
    padding: 2rem;
    width: 100vw;
    align-items: center;
    text-align: center;
}

.type-box{
    display: block;
    max-width: 1000px;
    height: 140px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden; 
}

.ResetBtn{
    background: transparent;
    font-size: 1rem;
    color: #745D54;
    border: none;
    padding: 0.2rem 0.7rem;
}
.ResetBtn:hover{
    color: #745D54;
    cursor: pointer;
}

.words{
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    color: #745D54;
}

.word{
    margin: 5px;
    padding-right: 2px;
}
.hidden-input{
    opacity: 0;
}
.current{
    border-left: 1px solid;
    animation: blinking 2s infinite;
    animation-timing-function: ease;
    @keyframes blinking{
        0% {border-left-color:white}
        25% {border-left-color:black}
        50% {border-left-color:white}
        75% {border-left-color:black}
        100% {border-left-color:white}
    }
}
.current-right{
    border-right: 1px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingRight{
        0% {border-right-color:white}
        25% {border-right-color:black}
        50% {border-right-color:white}
        75% {border-right-color:black}
        100% {border-right-color:white}
    }
}
.correct{
    color: #FFE4BC;
}
.incorrect{
    color: #CA4754;
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

.footer{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
}

.light-theme{
    background-color: #fff;
    color: #000;
}

.dark-theme {
    background-color: #333;
    color: #fff;
}
.header{
    width: 1000px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
}

`