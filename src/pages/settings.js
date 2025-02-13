import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  FormControlLabel,
  Switch,
  TextField,
  Button,
} from "@mui/material";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      <Grid container spacing={4}>
        {/* Theme Settings */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Theme
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              }
              label="Dark Mode"
            />
          </Paper>
        </Grid>

        {/* Notifications */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Notifications
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
              }
              label="Enable Notifications"
            />
          </Paper>
        </Grid>

        {/* Account Settings */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Account
            </Typography>
            <TextField
              fullWidth
              label="Email"
              placeholder="your@email.com"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              placeholder="••••••••"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Settings;