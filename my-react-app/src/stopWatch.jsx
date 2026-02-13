import './stopWatch.css';
import React , {useState,useEffect,useRef} from "react";

function StopWatch() {
    const [isRunning , setIsRunning] = useState(false);
    const [elapesTime,setElapesTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef= useRef(0);

    useEffect (()=>{
        if(isRunning){intervalIdRef.current=setInterval(() => {
                setElapesTime(Date.now()-startTimeRef.current);
            }, 10);
        }
        return()=>{
            clearInterval(intervalIdRef.current);
        }

    },[isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current=Date.now() - elapesTime;
    }
      function stop() {
        setIsRunning(false)

        
    }
      function reset() {
        setElapesTime(0);
        setIsRunning(false);
    }
    function formatTime() {
       let hours=Math.floor(elapesTime/(1000*60*60));
        let minutes=Math.floor(elapesTime/(1000*60)%60);
         let seconds=Math.floor(elapesTime/(1000)%60);
        let milliseconds=Math.floor((elapesTime%1000)/60);

        hours=String(hours).padStart(2,"0");
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        milliseconds=String(milliseconds).padStart(2,"0");



         
        return `${hours} : ${minutes}:${seconds} :${milliseconds} `;   
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
                <div className="controls">
                    <button onClick={start} className="start-btn">Start</button>
                    <button onClick={stop} className="stop-btn">Stop</button>
                    <button onClick={reset} className="reset-btn">Reset</button>
                </div>
            
        </div>
    )
}

export default StopWatch