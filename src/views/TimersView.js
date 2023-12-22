import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App.js";
import { FaFastForward, FaArrowRight, FaPause, FaPlay, } from "react-icons/fa";
import Countdown from "../components/timers/Countdown.js";
import Tabata from "../components/timers/Tabata.js";
import Stopwatch from "../components/timers/Stopwatch.js";
import XY from "../components/timers/XY.js";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";




const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const Timer = styled.div`
  border: ${({ isActive }) => (isActive ? "3px solid darkred" : "1px solid gray")};
  border-radius: 15px;
  padding: 15px;
  padding-top: 20px;
  font-size: 1.5rem;
  color: darkred;
  width: 100%;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: darkred;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;

const ButtonGroup = styled.div`
  display: flexwrap;
  background-color: black;
  padding: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`;

const TimerGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 78px;
`;


const AddButton = styled(Link)`
position: absolute;
top: 65px;
right: 20px;
padding: 10px;
background-color: darkgreen;
color: white;
border-radius: 25px;
text-decoration: none;
font-size: 1rem;
display: flex;
align-items: center;
z-index: 1;
`;



const renderComponent = (timerItem, index) => {
  let component;
  if (timerItem.componentType === "COUNTDOWN") {
    component = (
      <Countdown
        index={index}
        minutes={timerItem.minutes}
        seconds={timerItem.seconds}
      />
    );
  }
  if (timerItem.componentType === "TABATA") {
    component = (
      <Tabata
        index={index}
        minutes={timerItem.minutes}
        seconds={timerItem.seconds}
        rounds={timerItem.rounds}
      />
    );
  }
  if (timerItem.componentType === "STOPWATCH") {
    component = <Stopwatch index={index}
    minutes={timerItem.minutes}
    seconds={timerItem.seconds} />;
  }
  if (timerItem.componentType === "XY") {
    component = <XY 
    index={index}
    minutes={timerItem.minutes}
    seconds={timerItem.seconds}
    rounds={timerItem.rounds} />;
  }
  return component;
};

const TimersView = () => {
  const { timers, setTimers } = useContext(GlobalContext);
  const {
    activeIndex,
    setActiveIndex,
    isPaused,
    setIsPaused,
    setTimerIsRunning,
  } = useContext(GlobalContext);

  const saveTimersToLocalStorage = () => {
    localStorage.setItem("timers", JSON.stringify(timers));
  };

  useEffect(() => {
    const storedTimers = localStorage.getItem("timers");
    if (storedTimers) {
      setTimers(JSON.parse(storedTimers));
    }
  }, [setTimers]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      saveTimersToLocalStorage();
    }, 5000); 

    return () => clearInterval(intervalId);

    // eslint-disable-next-line
  }, [timers]);

  const handleButtonAction = (action) => {
    switch (action) {
      case "fastForward":
        setActiveIndex(activeIndex + 1);
        setIsPaused(false);
        setTimerIsRunning(true);
        break;
      case "START":
        setActiveIndex(0);
        setIsPaused(false);
        setTimerIsRunning(true);
        break;
      case "pausePlay":
        setIsPaused((prevIsPaused) => !prevIsPaused);
        setTimerIsRunning((prevTimerIsRunning) => !prevTimerIsRunning);
        break;
      case "END":
        setActiveIndex(null);
        setIsPaused(true);
        setTimerIsRunning(false);
        break;
      default:
        break;
    }
  };

  const totalDuration = timers.reduce((total, timer) => {
    let timerDuration = timer.minutes * 60 + timer.seconds;

    if (timer.componentType === "XY") {
      timerDuration *= timer.rounds;
    } else if (timer.componentType === "TABATA") {
      timerDuration *= timer.rounds * 2;
    }

    return total + timerDuration;
  }, 0);

  const formatDuration = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    return `${hours > 0 ? hours + "h " : ""}${minutes}m ${seconds}s`;
  };

  const moveTimer = (currentIndex, direction) => {
    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex >= 0 && newIndex < timers.length) {
      const newTimers = [...timers];
      const [movedTimer] = newTimers.splice(currentIndex, 1);
      newTimers.splice(newIndex, 0, movedTimer);
      setTimers(newTimers);
    }
  };

  const isAnyTimerActive = timers.some((_, index) => activeIndex === index);

  
  const handleAddButtonClick = () => {
    setActiveIndex(null);
    setIsPaused(true);
    setTimerIsRunning(false);
  };

  
  return (
    <div>
      <ButtonGroup>
        {timers.length > 0 ? (
          <>
            <StyledButton onClick={() => handleButtonAction("START")}>
              START
            </StyledButton>
            <StyledButton onClick={() => handleButtonAction("fastForward")}>
              <FaFastForward />
            </StyledButton>
            <StyledButton onClick={() => handleButtonAction("pausePlay")}>
              {isPaused ?  <FaPlay /> : <FaPause /> }
            </StyledButton>
            <StyledButton onClick={() => handleButtonAction("END")}>
              END
            </StyledButton>
          </>
        ) : null}
      </ButtonGroup>
      <div></div>
      <AddButton to="/add" onClick={handleAddButtonClick}>
      ADD / EDIT TIMERS<FaArrowRight />
      </AddButton>
      <div style={{ textAlign: "center", marginTop: "60px", fontSize: "25px" }}>
        Total Workout Duration: {formatDuration(totalDuration)}
      </div>
      <TimerGroup>
      <Timers>
          {timers.length > 0 ? (
            timers.map((timer, index) => (
              <div key={index} style={{ position: "relative" }}>
                <Timer key={index} isActive={activeIndex === index} style={{ position: "relative" }}>
                <h2>{timer.title}</h2>
                <p>{timer.description}</p>
                  {renderComponent(timer, index)}
                  {!isAnyTimerActive && (
                    <div style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)" }}>
                      <StyledButton onClick={() => moveTimer(index, "up")}>
                        <FaArrowUp />
                      </StyledButton>
                    </div>
                  )}
                  {!isAnyTimerActive && (
                    <div style={{ position: "absolute", bottom: -20, left: "50%", transform: "translateX(-50%)" }}>
                      <StyledButton onClick={() => moveTimer(index, "down")}>
                        <FaArrowDown />
                      </StyledButton>
                    </div>
                  )}
                </Timer>
              </div>
            ))
          ) : (
            <div style={{ fontSize: "20px" }}>Configure your timers!</div>
          )}
        </Timers>
      </TimerGroup>
    </div>
  );
};

export default TimersView;