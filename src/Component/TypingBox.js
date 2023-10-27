import React, { useEffect, useRef, useMemo, createRef, useState } from "react";
import { generate } from "random-words";
import UpperMenu from "./UpperMenu";
import { useTestMode } from "../Context/TestModeContext";



const TypingBox = () => {
    
    const inputRef = useRef(null);
    const {testTime} = useTestMode();
    const [countDown, setCountDown] = useState(testTime);
    const [intervalId, setIntervalId] = useState(null);
    const [testStart, setTestStart] = useState(false);
    const [testEnd, setTestEnd] = useState(false);
    const [correctChars, setCorrectChars] = useState(0);
    const [incorrectChars, setIncorrectChars] = useState(0);
    const [missedChars, setMissedChars] = useState(0);
    const [extraChars, setExtraChars] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [wordsArray, setWordsArray] = useState(()=> {
        return generate(50);
    });

    const [currentWordIndex, setCurrentwordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    const wordsSpanRef = useMemo(()=> {
        return Array(wordsArray.length).fill(0).map(i=> createRef(null));
    },[wordsArray])

    const startTimer = () => {
        const interValId = setInterval(timer, 1000);
        setIntervalId(intervalId);
        function timer() {
            setCountDown((latestCountDown)=>{

                if(latestCountDown === 1){
                    setTestEnd(true);
                    clearInterval(interValId);
                    return 0;
                }

                return latestCountDown-1;
            });
        }
    }

    const resetTest = ()=> {
        clearInterval(intervalId);
        setCountDown(testTime);
        setCurrentwordIndex(0);
        setCurrentCharIndex(0);
        setTestStart(false);
        setTestEnd(false);
        setWordsArray(generate(50));
        resetWordSpanRefClassname();
        focusInput();
    }

    const resetWordSpanRefClassname = () => {
        wordsSpanRef.map(i => {
            return Array.from(i.current.childNodes).map(j => {
                j.className = '';
                return j;
            })
        });
        wordsSpanRef[0].current.childNodes[0].className = 'current';
    }

    const handleUserInput = (e) => {

        if(!testStart) {
            startTimer();
            setTestStart(true);
        }

        const allCurrentChars = wordsSpanRef[currentWordIndex].current.childNodes;

        if(e.keyCode === 32){

            let correctCharsInWords = wordsSpanRef[currentWordIndex].current.querySelectorAll('.correct');

            if(correctCharsInWords.length === allCurrentChars.length){
                setCorrectWords(correctWords+1);
            }

            if(allCurrentChars.length<=currentCharIndex){
                allCurrentChars[currentCharIndex-1].classList.remove('current-right');
            } else {
                setMissedChars(missedChars + (allCurrentChars.length - currentCharIndex));
                allCurrentChars[currentCharIndex].classList.remove('current');
            }

            wordsSpanRef[currentWordIndex+1].current.childNodes[0].className = 'current';
            setCurrentwordIndex(currentWordIndex+1);
            setCurrentCharIndex(0);
            return;
        }

        if(e.keyCode === 8){
           
           if(currentCharIndex !== 0){

            if(allCurrentChars.length === currentCharIndex){

                if(allCurrentChars[currentCharIndex-1].className.includes('extra')){
                    allCurrentChars[currentCharIndex-1].remove();
                    allCurrentChars[currentCharIndex-2].className += ' current-right';
                }
                else {
                    allCurrentChars[currentCharIndex-1].className = 'current';
                }
                
                setCurrentCharIndex(currentCharIndex-1);
                return;            
            }

            allCurrentChars[currentCharIndex].className = '';
            allCurrentChars[currentCharIndex-1].className = 'current';
            setCurrentCharIndex(currentCharIndex-1);
           }

            return;
        }

        if(currentCharIndex === allCurrentChars.length){
            let newSpan = document.createElement('span');
            newSpan.innerText = e.key;
            newSpan.className = 'incorrect extra current-right';
            allCurrentChars[currentCharIndex-1].classList.remove('current-right');
            wordsSpanRef[currentWordIndex].current.append(newSpan);
            setCurrentCharIndex(currentCharIndex+1);
            setExtraChars(extraChars+1);
            return;

        }

        if(e.key === allCurrentChars[currentCharIndex].innerText){
            allCurrentChars[currentCharIndex].className = 'correct';
            setCorrectChars(correctChars+1);
        } else {
            allCurrentChars[currentCharIndex].className = 'incorrect';
            setIncorrectChars(incorrectChars+1);
        }

        if(currentCharIndex+1 === allCurrentChars.length){
            allCurrentChars[currentCharIndex].className += ' current-right';    
        } else {
            allCurrentChars[currentCharIndex+1].className = 'current';
        }

        setCurrentCharIndex(currentCharIndex+1);

    }

    const calculateWPM = () => {
        return Math.round((correctChars/5)/(testTime/60));
    }

    const calculateAccuracy = () => {
        return Math.round((correctWords/currentWordIndex)*100)
    }

    const focusInput =() => {
        inputRef.current.focus();
    }

    useEffect(() => {
        resetTest();
    }, [testTime]);

    useEffect(()=>{
        focusInput();
        wordsSpanRef[0].current.childNodes[0].className = 'current';
    }, [wordsSpanRef]);

    return(
        <div>
            <UpperMenu countDown={countDown} />
            { (testEnd) ? (<h1>Test Over</h1>): (<div className="type-Box" onClick={focusInput}>
            <div className="type-box" onClick={focusInput}>
                <div className="words">
                    {
                        wordsArray.map((word, index)=> (
                            <span className="word" ref={wordsSpanRef[index]}>
                                {word.split('').map((char, index) => (
                                    <span key={index}>
                                        {char}
                                    </span>
                                ))}
                            </span>
                        ))
                    }
                </div>
            </div>

            </div>)}
            <input
                type="text"
                className="hidden-input"
                ref={inputRef}
                onKeyDown={handleUserInput}
            />
            <br/>
            <button className="ResetBtn" onClick={resetTest}>Reset</button>
        </div>
    )
}

export default TypingBox;