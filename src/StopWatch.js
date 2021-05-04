import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;

        if(isActive){
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        }

        return () => clearInterval(interval);

    }, [isActive])
    
    let onReset = () => {
        setTime(0);
        setIsActive(false);
    }

    return (
      <div className="container">
        <div className="timer">
            <div className="header">
                <ul>
                    <li><Link to="/">TIMER</Link></li>
                    <li><Link to="StopWatch">STOPWATCH</Link></li>
                </ul>
            </div>
            <div className="body">
                <div className="number">
                    <p>
                        { ("0" + Math.floor((time / 1000) % 60)).slice(-2) }<span>s </span>
                        <span>{ ("0" + ((time / 10) % 100)).slice(-2) }</span>
                    </p>
                    
                </div>
            </div>
            <div className="footer">
                <div className="btn">
                    <button className="btnStart" 
                            onClick={ () => setIsActive(!isActive) }>{ isActive ? "Pause" : "Start" }</button>
                    <button className="btnRESET" onClick={ onReset }>RESET</button>
                </div>
            </div>
        </div>
      </div>  
    )
}

export default StopWatch;