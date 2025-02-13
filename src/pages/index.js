import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Timer from "../components/Timer/Timer";
import SoundPlayer from "../components/SoundPlayer/SoundPlayer";
import TaskManager from "../components/TaskManager/TaskManager";
import Analytics from "../components/Analytics/Analytics";
import MiningToggle from "../components/MiningToggle/MiningToggle";
import Auth from "../components/Auth/Auth";

export default function Home({ user, setUser }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Pomodoro Timer
      </Typography>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Timer />
            </Grid>
            <Grid item>
              <SoundPlayer />
            </Grid>
            <Grid item>
              <TaskManager />
            </Grid>
          </Grid>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Analytics />
            </Grid>
            <Grid item>
              <MiningToggle />
            </Grid>
            <Grid item>
              <Auth user={user} setUser={setUser} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}