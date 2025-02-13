import React from "react";
import { Paper, Typography } from "@mui/material";

const Analytics = () => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Productivity Analytics
      </Typography>
      <Typography>Total Focus Time: 12h 34m</Typography>
      <Typography>Sessions Completed: 28</Typography>
      <Typography>Tasks Completed: 45</Typography>
    </Paper>
  );
};

export default Analytics;