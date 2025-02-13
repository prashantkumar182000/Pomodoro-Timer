import React from "react";
import { Paper, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Check, Close } from "@mui/icons-material";

const RecentTasks = () => {
  const tasks = ["Complete project setup", "Write documentation", "Test mining integration"];

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Recent Tasks
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
            <IconButton edge="end">
              <Check />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RecentTasks;