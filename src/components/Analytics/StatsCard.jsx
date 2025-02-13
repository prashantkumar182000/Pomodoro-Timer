import React from "react";
import { Paper, Typography } from "@mui/material";

const StatsCard = ({ title, value, color }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, backgroundColor: color }}>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" component="p">
        {value}
      </Typography>
    </Paper>
  );
};

export default StatsCard;