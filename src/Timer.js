import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Timer = () => {
    const [second, setSecond] = useState(55);
    const [minute, setMinute] = useState(4);
    const [isActive, setIsActive] = useState(false);
    const [over, setOver] = useState(false);

    useEffect(() => {
      let intervalId;

      if(isActive){
        if(over){
          intervalId = setInterval(() => {
            setSecond(second - 1);
          }, 1000)
        }
      }

      if(minute === 0 && second === 0){
        setOver(false);
      }
      if(minute !== 0 && second === -1){
        setMinute(minute - 1);
        setSecond(59);
      }

      return () => clearInterval(intervalId);
    }, [isActive, over, second])

    let onReset = () => {
        setIsActive(false);
        setOver(false);
        setSecond(55);
        setMinute(4);
    }

    let onStart = () => {
      setIsActive(!isActive)
      setOver(!over);
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
                    <p>{minute}<span>m</span>{second}<span>s</span></p>
                </div>
            </div>
            <div className="footer">
                <div className="btn">
                    <button className="btnStart" 
                            onClick={ onStart }>{ isActive ? "Pause" : "Start" }</button>
                    <button className="btnRESET" onClick={ onReset }>RESET</button>
                </div>
            </div>
        </div>
      </div>  
    )
}

export default Timer;