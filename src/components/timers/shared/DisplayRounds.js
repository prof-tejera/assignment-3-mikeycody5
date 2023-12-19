import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DisplayRoundsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  background-color: #121212;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  background-image: 
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),
    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);
  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;
  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;
`;

const LabelContainer = styled.div`
  flex: 1;
  align-items: center;
  border-radius: 25px;
  margin: 10px;
  background-color: black;
`;

const DisplayRoundsLabel = styled.label`
flex: 1; 
font-weight: 300;
font-size: 16px;
background-color: black;
color: #fff;
border: none;
cursor: pointer;
`;
const DisplayRoundsSelect = styled.select`
flex: 1;
  font-weight: 300;
  font-size: 16px;
  padding: 7px;
  margin: 10px 0px 10px 10px;
  background-color: darkred;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
  }
`;

const renderOptions = (start, end) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    options.push(
      <option key={i} value={i}>
        {i < 10 ? `0${i}` : i}
      </option>
    );
  }
  return options;
};

const DisplayRounds = ({ currentRound, initialRounds, onRoundsChange, disabled, resting }) => {
  const [rounds, setRounds] = useState(initialRounds);

  useEffect(() => {
    if (resting) {
      setRounds(currentRound);
    }
  }, [currentRound, resting]);

  const handleRoundsChange = (newRounds) => {
    setRounds(newRounds);
    onRoundsChange(newRounds);
  };

  return (
    <DisplayRoundsContainer>
      <LabelContainer>
      <DisplayRoundsLabel>
        ROUND {currentRound} / {rounds}
      </DisplayRoundsLabel>
      <DisplayRoundsSelect
        value={rounds}
        onChange={(e) => handleRoundsChange(Number(e.target.value))}
        disabled={disabled || resting}
      >
        {renderOptions(1, 100)}
      </DisplayRoundsSelect>
      </LabelContainer>
    </DisplayRoundsContainer>
  );
};

export default DisplayRounds;
