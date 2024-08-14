import React, {useState, useRef, useEffect} from "react";

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapseTime, setElapseTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=> {
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapseTime(Date.now() - startTimeRef.current);
            }, 10)
        }
           
        return()=>{
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning])

    function playTime(){
        setIsRunning(true);
        startTimeRef.current = Date.now()- elapseTime;
    }

    function stopTime(){
        setIsRunning(false);
    }

    function resetTime(){
        setElapseTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapseTime /1000 % 60) ;
        let milliseconds = Math.floor(elapseTime %1000 /10);

        let minutesFormatted = minutes.toString().padStart(2,"0");
        let secondsFormatted = seconds.toString().padStart(2,"0");
        let millisecondsFormatted = milliseconds.toString().padStart(2,"0");

        return `${minutesFormatted}:${secondsFormatted}:${millisecondsFormatted}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start-button" onClick={playTime}>Start</button>
                <button className="stop-button" onClick={stopTime}>Stop</button>
                <button className="reset-button" onClick={resetTime}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;