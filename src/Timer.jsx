import React, {useState, useEffect} from "react";

function Timer(){

    const timeElements = document.getElementsByClassName("time");
    let isRunning=true;
    let milliseconds = 0;
    let counter=1;
    

    function playTime(){
        counter++;
      
        const intervalId = setInterval(() => {
            if(counter === 2){
            milliseconds = milliseconds +10;
            
            FormatTime();
            }
            
           
            else{
                clearInterval(intervalId);
            }
            
        }, 10);
    }

    function stopTime(){
        counter =1;
    }
    function resetTime(){
        counter =1;
        milliseconds=0;
        
        for (let i = 0; i < timeElements.length; i++) {
            timeElements[i].textContent = "00:00:000";
        }
    }

    function FormatTime(){
        
        let seconds = Math.floor((milliseconds / 1000) % 60);
        let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
        let secondsFormatted = seconds.toString().padStart(2, "0");
        let minutesFormatted = minutes.toString().padStart(2, "0");
        let timeElapsed = (milliseconds + 10) % 1000;
        let timeElapsedFormatted = timeElapsed.toString().padStart(3, "0");
        
    // Loop through the elements and update their text content
    for (let i = 0; i < timeElements.length; i++) {
        timeElements[i].textContent = `${minutesFormatted}:${secondsFormatted}:${timeElapsedFormatted}`;
    }
    }

   

    return(
        <div className="timer">
            <span className="time">00:00:000</span>
            <div className="controls">
            <button className="button" onClick={playTime}>▶️</button>
            <button className="button" onClick={stopTime}>🛑</button>
            <button className="button" onClick={resetTime}>🔁</button>
            </div>
        </div>
    );
}

export default Timer;