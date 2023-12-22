import React, { useState } from "react";
import styled from "styled-components";

const TimerExplanation = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <Container>
      <DropdownButton onClick={toggleDropdown}>
        Timer Information
      </DropdownButton>

      {dropdownVisible && (
        <DropdownContent>
          <TimerSection>
            <TimerTitle>Countdown Timer</TimerTitle>
            <TimerDescription>
              The countdown timer counts down from a specified time to zero.
            </TimerDescription>
          </TimerSection>
          
          <TimerSection>
            <TimerTitle>Tabata Timer</TimerTitle>
            <TimerDescription>
              The Tabata timer allows for rounds consisting of equal work and rest time. You may select your desired amount of rounds and duration per round. When the rest bar displays, RELAX!
            </TimerDescription>
          </TimerSection>
          
          <TimerSection>
            <TimerTitle>Stopwatch</TimerTitle>
            <TimerDescription>
              The stopwatch is a simple timer that counts up from zero. To move on to the next timer in queue, press the fast forward button.
            </TimerDescription>
          </TimerSection>

          <TimerSection>
            <TimerTitle>XY Timer</TimerTitle>
            <TimerDescription>
              The XY timer allows for X amount of rounds with no rest in between each round. You may select your desired amount of rounds and duration per round.
            </TimerDescription>
          </TimerSection>
        </DropdownContent>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const DropdownButton = styled.button`
  background-color: black;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  color: white;
  background-color: #121212;
  border: 30px solid black;
  border-radius: 15px;
  padding: 20px;
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-image: 
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);
  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;
  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;
`;

const TimerSection = styled.div`
  margin-bottom: 20px;
`;

const TimerTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const TimerDescription = styled.p`
  font-size: 1rem;
  color: lightgrey;
  background-color: black;
  padding: 15px;
  border-radius: 20px;
`;

export default TimerExplanation;
