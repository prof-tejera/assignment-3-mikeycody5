import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import AddView from "./views/AddView";
import bg3 from "./images/bg3.png";

const Container = styled.div`
  background-color: #E3E3DD;
  background-image: url(${bg3});
  background-repeat: repeat; 
  background-position: center;
  height: 100vh;
  overflow: auto;
  `;

export const GlobalContext = createContext(null);

const ErrorFallback = ({ error }) => (
  <div>
    <h1>Something went wrong! Restart the app!</h1>
    <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
  </div>
);


const App = () => {
  const [timers, setTimers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pausedIndex, setPausedIndex] = useState();
  
  const handleRemoveTimer = (updatedTimers, removedTimer) => {
    setTimers(updatedTimers);
    console.log("Removed Timer:", removedTimer);
  };

  const updateTimersOrder = (newOrder) => {
    setTimers(newOrder);
  };

  useEffect(() => {
    console.log("App.js global state active index:", activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    console.log({ timers });
  }, [timers]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={(error, info) => console.error(error)}>
    <GlobalContext.Provider
      value={{
        timers,
        setTimers,
        timerIsRunning,
        setTimerIsRunning,
        activeIndex,
        setActiveIndex,
        isPaused,
        setIsPaused,
        pausedIndex,
        setPausedIndex,
        updateTimersOrder,
      }}
    >
      <Container>
        <Router>
          <Routes>
            <Route path="/docs" element={<DocumentationView />} />
            <Route path="/" element={<TimersView />} />
            <Route
              path="/add"
              element={<AddView onRemoveTimer={handleRemoveTimer} />}
            />
          </Routes>
        </Router>
      </Container>
    </GlobalContext.Provider>
    </ErrorBoundary>
  );
};

export default App;