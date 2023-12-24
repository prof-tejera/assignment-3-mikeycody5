import React, { useState, useEffect, useContext } from "react";
import DisplayTime from "../timers/shared/DisplayTime.js";
import Input from "../timers/shared/input.js";
import { GlobalContext } from "../../App.js";


const Stopwatch = (props) => {
  const [time, setTime] = useState((props.minutes * 60 + props.seconds) * 1000);
  const {
    activeIndex,
    setActiveIndex,
    timerIsRunning,
    timers, 
    setTimers,
    index,
  } = useContext(GlobalContext);
  const isActive = props.index === activeIndex;

  useEffect(() => {
    let interval;
  
    if (isActive && timerIsRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1000;
          if (newTime >= (props.minutes * 60 + props.seconds) * 1000) {
            console.log({ index, activeIndex });
            setActiveIndex(props.index + 1);
            clearInterval(interval);
          }
  
          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(interval);
      if (!isActive) {
        setTime(0);
      }
    }
  
    return () => clearInterval(interval);
  }, [isActive, index, activeIndex, timerIsRunning, props.index, props.minutes, props.seconds, setActiveIndex]);
  
  

  const handleSetMinutes = (mins) => {
    const timerToEdit = timers[props.index];
    const updatedTimer = {
      ...timerToEdit,
      minutes: mins,
    };
    const timersCopy = [...timers];
    timersCopy.splice(props.index, 1, updatedTimer);
    setTimers(timersCopy);
  };

  const handleSetSeconds = (secs) => {
    const timerToEdit = timers[props.index];
    const updatedTimer = {
      ...timerToEdit,
      seconds: secs,
    };
    const timersCopy = [...timers];
    timersCopy.splice(props.index, 1, updatedTimer);
    setTimers(timersCopy);
  };



  return (
    <div className="stopwatch">
      <Input
        minutes={props.minutes}
        setMinutes={handleSetMinutes}
        seconds={props.seconds}
        setSeconds={handleSetSeconds}
        disabled={isActive}
      />
      <DisplayTime time={time} />
    </div>
  );
};

export default Stopwatch;