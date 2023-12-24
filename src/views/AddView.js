import React, { useContext, useEffect, useState, } from "react";
import styled from "styled-components";
import TimerExplanation from "../components/timers/shared/TimerExplanation";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";
import Countdown from "../components/timers/Countdown";
import Tabata from "../components/timers/Tabata";
import Stopwatch from "../components/timers/Stopwatch";
import XY from "../components/timers/XY";

const BackButton = styled(Link)`
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


const ButtonGroup = styled.div`
  display: flexwrap;
  background-color: black;
  padding: 25px;
  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  
`;

const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor || "darkred"};
  color: ${({ fontColor }) => fontColor || "white"};
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "red"};
  }
`;

const Timers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TimerGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const Timer = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  padding-bottom: 35px;
  font-size: 2rem;
  color: darkred;
  width: 100%;
  text-align: center;
`;

const TimerTitle = styled.div`
  margin: 25px;
  font-weight: 400;
`;

const TimerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const StyledRemoveButton = styled(StyledButton)`
  background-color: Darkred;
  color: #d76060;
  align-items: center;
  margin-top: 20px;
`;

const StyledSaveButton = styled(StyledButton)`
  background-color: ${({ saveSuccess }) => (saveSuccess ? "Darkgreen" : "darkgreen")};
  color: ${({ saveSuccess }) => (saveSuccess ? "#60d760" : "white")};
`;

const AddView = ({ onRemoveTimer }) => {
  
  const { timers, setTimers } = useContext(GlobalContext);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const TIMERS = [
    { key: "timer-countdown", title: "Countdown", description: "Counts down from a specified time to 0" , componentType: "COUNTDOWN" },
    { key: "timer-tabata", title: "Tabata", description: "Rounds with equal work and rest time" , componentType: "TABATA" },
    { key: "timer-stopwatch", title: "Stopwatch", description: "Counts up from 0 to a specified time" , componentType: "STOPWATCH" },
    { key: "timer-xy", title: "XY", description: "Rounds of work with no rest time" , componentType: "XY" },
  ];

  useEffect(() => {
    const storedTimers = localStorage.getItem("timers");
    if (storedTimers) {
      setTimers(JSON.parse(storedTimers));
    }
  }, [setTimers]);

  const handleAddTimer = (timerItem) => {
    const index = timers.length;
    const newTimer = {
      ...timerItem, title: timerItem.title, index,
      key: index,
      minutes: timerItem.minutes || 0,  
      seconds: timerItem.seconds || 0,  
      rounds: timerItem.rounds || 5, 
    };
    setTimers([...timers, newTimer]);
    setSaveSuccess(false);
  };


  const renderComponent = (timerItem, index) => {
    let component;
    switch (timerItem.componentType) {
      case "COUNTDOWN":
        component = (
          <Countdown
            index={index}
            minutes={timerItem.minutes}
            seconds={timerItem.seconds}
          />
        );
        break;
      case "TABATA":
        component = (
          <Tabata
            index={index}
            minutes={timerItem.minutes}
            seconds={timerItem.seconds}
            rounds={timerItem.rounds}
          />
        );
        break;
      case "STOPWATCH":
        component = (
          <Stopwatch
            index={index}
            minutes={timerItem.minutes}
            seconds={timerItem.seconds}
          />
        );
        break;
      case "XY":
        component = (
          <XY
            index={index}
            minutes={timerItem.minutes}
            seconds={timerItem.seconds}
            rounds={timerItem.rounds}
          />
        );
        break;
      default:
        break;
    }
    return component;
  };

  const handleRemoveTimer = (index) => {
    const updatedTimers = timers.filter((_, i) => i !== index);
    onRemoveTimer(updatedTimers, timers[index]);
    setTimers(updatedTimers);
    localStorage.setItem("timers", JSON.stringify(updatedTimers));

  };

  const handleSaveTimer = () => {
    const savedTimers = timers.map((timer) => ({
      ...timer,
      minutes: timer.minutes || 0,
      seconds: timer.seconds || 0,
      rounds: timer.rounds || 5,
    }));

    setTimers(savedTimers);
    localStorage.setItem("timers", JSON.stringify(savedTimers));
    setSaveSuccess(true);
  };

  return (
    <>
      <BackButton to="/">
        <FaArrowLeft />VIEW WORKOUT
      </BackButton>
      <ButtonGroup>
        {TIMERS.map((timer) => (
          <StyledButton
            key={timer.key}
            onClick={() => handleAddTimer(timer)}
            bgColor="#121212"
            hoverColor="red"
          >
            {timer.title}
          </StyledButton>
        ))}
        <StyledSaveButton
          bgColor="Darkgreen"
          fontColor="white"
          hoverColor="grey"
          onClick={handleSaveTimer}
          saveSuccess={saveSuccess}
        >
          {saveSuccess ? <FaCheck /> : "Save"}
        </StyledSaveButton>
      </ButtonGroup>
      <TimerExplanation />
      <Timers>
        <TimerGroup>
          {timers.map((queueItem, index) => (
            <Timer key={queueItem.key}>
              <TimerTitle>{queueItem.title}</TimerTitle>
              {renderComponent(queueItem, index)}
              <TimerButtons>
                <StyledRemoveButton
                  onClick={() => handleRemoveTimer(index)}
                  bgColor="Darkred"
                  fontColor="#D76060"
                >
                  Remove
                </StyledRemoveButton>
              </TimerButtons>
            </Timer>
          ))}
        </TimerGroup>
      </Timers>
    </>
  );
};

export default AddView;
