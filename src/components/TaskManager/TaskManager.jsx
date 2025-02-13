import React, { useState } from "react";
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Check, Close } from "@mui/icons-material";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Tasks
      </Typography>
      <TextField
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a task"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={addTask}>
        Add Task
      </Button>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText
              primary={task.text}
              sx={{ textDecoration: task.completed ? "line-through" : "none" }}
            />
            <IconButton onClick={() => toggleTask(task.id)}>
              {task.completed ? <Close /> : <Check />}
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TaskManager;