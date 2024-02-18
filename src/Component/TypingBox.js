import React, { useEffect, useRef, useMemo, createRef, useState, useCallback } from "react";
import { generate } from "random-words";
import UpperMenu from "./UpperMenu";
import { useTestMode } from "../Context/TestModeContext";
import Stats from "./Stats";

const TypingBox = () => {
    
    const inputRef = useRef(null);
    const { testTime } = useTestMode();
    const [countDown, setCountDown] = useState(testTime);
    const [intervalId, setIntervalId] = useState(null); // Define intervalId state
    const [testStart, setTestStart] = useState(false);
    const [testEnd, setTestEnd] = useState(false);
    const [correctChars, setCorrectChars] = useState(0);
    const [incorrectChars, setIncorrectChars] = useState(0);
    const [missedChars, setMissedChars] = useState(0);
    const [extraChars, setExtraChars] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [wordsArray, setWordsArray] = useState(() => generate(50));
    const [graphData, setGraphData] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    const wordsSpanRef = useMemo(() => Array(wordsArray.length).fill(0).map(() => createRef()), [wordsArray]);

    const startTimer = useCallback(() => {
        const id = setInterval(timer, 1000); // Use 'id' instead of 'intervalId'
        setIntervalId(id); // Store interval ID in state
        function timer() {
            setCountDown(prevCountDown => {
                setCorrectChars(prevCorrectChars => {
                    setGraphData(prevGraphData => [
                        ...prevGraphData,
                        [testTime - prevCountDown + 1, (prevCorrectChars / 5) / ((testTime - prevCountDown + 1) / 60)]
                    ]);
                    return prevCorrectChars;
                });

                if (prevCountDown === 1) {
                    setTestEnd(true);
                    clearInterval(id); // Clear interval using 'id'
                    return 0;
                }
                return prevCountDown - 1;
            });
        }
        return () => clearInterval(id); // Clear interval using 'id'
    }, [testTime]);


    const resetWordSpanRefClassname = useCallback(() => {
        if (wordsSpanRef[currentWordIndex]?.current) { // Ensure current element is not null
            Array.from(wordsSpanRef[currentWordIndex].current.childNodes).forEach(child => {
                child.className = '';
            });
        }
        if (wordsSpanRef[0]?.current?.childNodes[0]) { // Ensure current element is not null
            wordsSpanRef[0].current.childNodes[0].className = 'current';
        }
    }, [wordsSpanRef, currentWordIndex]);
    

    const handleUserInput = useCallback((e) => {
        if (!testStart) {
            startTimer();
            setTestStart(true);
        }

        const allCurrentChars = wordsSpanRef[currentWordIndex].current.childNodes;

        if (e.keyCode === 32) {
            const correctCharsInWords = wordsSpanRef[currentWordIndex].current.querySelectorAll('.correct');

            if (correctCharsInWords.length === allCurrentChars.length) {
                setCorrectWords(prevCorrectWords => prevCorrectWords + 1);
            }

            if (allCurrentChars.length <= currentCharIndex) {
                allCurrentChars[currentCharIndex - 1].classList.remove('current-right');
            } else {
                setMissedChars(prevMissedChars => prevMissedChars + (allCurrentChars.length - currentCharIndex));
                allCurrentChars[currentCharIndex].classList.remove('current');
            }

            wordsSpanRef[currentWordIndex + 1].current.childNodes[0].className = 'current';
            setCurrentWordIndex(prevIndex => prevIndex + 1);
            setCurrentCharIndex(0);
            return;
        }

        if (e.keyCode === 8) {
            if (currentCharIndex !== 0) {
                if (allCurrentChars.length === currentCharIndex) {
                    if (allCurrentChars[currentCharIndex - 1].className.includes('extra')) {
                        allCurrentChars[currentCharIndex - 1].remove();
                        allCurrentChars[currentCharIndex - 2].className += ' current-right';
                    } else {
                        allCurrentChars[currentCharIndex - 1].className = 'current';
                    }
                    setCurrentCharIndex(prevIndex => prevIndex - 1);
                    return;
                }
                allCurrentChars[currentCharIndex].className = '';
                allCurrentChars[currentCharIndex - 1].className = 'current';
                setCurrentCharIndex(prevIndex => prevIndex - 1);
            }
            return;
        }

        if (currentCharIndex === allCurrentChars.length) {
            const newSpan = document.createElement('span');
            newSpan.innerText = e.key;
            newSpan.className = 'incorrect extra current-right';
            allCurrentChars[currentCharIndex - 1].classList.remove('current-right');
            wordsSpanRef[currentWordIndex].current.append(newSpan);
            setCurrentCharIndex(prevIndex => prevIndex + 1);
            setExtraChars(prevExtraChars => prevExtraChars + 1);
            return;
        }

        if (e.key === allCurrentChars[currentCharIndex].innerText) {
            allCurrentChars[currentCharIndex].className = 'correct';
            setCorrectChars(prevCorrectChars => prevCorrectChars + 1);
        } else {
            allCurrentChars[currentCharIndex].className = 'incorrect';
            setIncorrectChars(prevIncorrectChars => prevIncorrectChars + 1);
        }

        if (currentCharIndex + 1 === allCurrentChars.length) {
            allCurrentChars[currentCharIndex].className += ' current-right';
        } else {
            allCurrentChars[currentCharIndex + 1].className = 'current';
        }

        setCurrentCharIndex(prevIndex => prevIndex + 1);

    }, [testStart, startTimer, wordsSpanRef, currentWordIndex, currentCharIndex]);

    const calculateWPM = () => Math.round((correctChars / 5) / (testTime / 60));

    const calculateAccuracy = () => Math.round((correctWords / currentWordIndex) * 100);

    const focusInput = () => {
        inputRef.current.focus();
    };

    useEffect(() => {
        focusInput();
        wordsSpanRef[0].current.childNodes[0].className = 'current';
    }, [wordsSpanRef]);

    const resetTest = () => {
        clearInterval(intervalId);
        setCountDown(testTime);
        setCurrentWordIndex(0);
        setCurrentCharIndex(0);
        setTestStart(false);
        setTestEnd(false);
        setWordsArray(generate(50));
        resetWordSpanRefClassname();
        focusInput();
    };

    return (
        <div>
            <UpperMenu countDown={countDown} />
            {testEnd ? (
                <Stats
                    wpm={calculateWPM()}
                    accuracy={calculateAccuracy()}
                    correctChars={correctChars}
                    incorrectChars={incorrectChars}
                    missedChars={missedChars}
                    extraChars={extraChars}
                    graphData={graphData}
                />
            ) : (
                <div className="type-Box" onClick={focusInput}>
                    <div className="type-box" onClick={focusInput}>
                        <div className="words">
                            {wordsArray.map((word, index) => (
                                <span key={index} className="word" ref={wordsSpanRef[index]}>
                                    {word.split('').map((char, charIndex) => (
                                        <span key={charIndex} char={char}>
                                            {char}
                                        </span>
                                    ))}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <input
                type="text"
                className="hidden-input"
                ref={inputRef}
                onKeyDown={handleUserInput}
            />
            <br />
            <button className="ResetBtn" onClick={resetTest}>Reset</button>
        </div>
    );
};

export default TypingBox;
