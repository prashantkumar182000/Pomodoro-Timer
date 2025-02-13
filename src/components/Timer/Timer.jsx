import React, { useState, useEffect } from "react";
import { Paper, Typography, Button, CircularProgress } from "@mui/material";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            alert("Time’s up! Take a break.");
            setIsActive(false);
            setMinutes(25);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => setIsActive(!isActive);

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Pomodoro Timer
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        {`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={toggleTimer}
      >
        {isActive ? "Pause" : "Start"}
      </Button>
    </Paper>
  );
};

export default Timer;