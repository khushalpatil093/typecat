import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
}

body{
    background : #07737A;
    color: #F3E03B;
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
    color: #F3E03B;
    border: none;
    padding: 0.2rem 0.7rem;
}
.ResetBtn:hover{
    color: #FFFFFF;
    cursor: pointer;
}

.words{
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    color: #F3E03B;
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
    color: white;
    cursor: pointer;
}

.footer{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
}
.header{
    width: 1000px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
}
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.headName{
    font-size: 2rem;
    font-weight: 800;
    color: #FFFFFF;
}

.stats-box{
    display: flex;
    width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}

.left-stats{
    width: 30%;
    padding: 30px;
}

.right-stats{
    width: 70%;
}

.title{
    font-size: 2.5rem;
    text-align: left;
}

.subtitle{
    font-size: 2rem;
    text-align: left;
    color: #FFFFFF;
}

.user-profile{
    width: 80vw;
    margin: auto;
    display: flex;
    height: 40vh;
    background: ;
    border-radius: 20px;
    padding: 1rem;
    justify-content: center;
    align-text: center;
}
.user{
    width: 50%;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    padding: 1rem;
    border-right: 2px solid;
}

.info{
    width: 50%;
    padding: 1rem;
    margin-top: 1rem;
}
.picture{
    width: 30%;
}

.total-tests{
    width: 50%;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.table{
    margin: auto;
    width: 80vw;
}
.graph-user-page{
    margin: auto;
    width: 80vw;
}
.center-of-screen{
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
}

`