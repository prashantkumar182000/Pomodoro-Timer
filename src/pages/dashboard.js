import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import AnalyticsChart from "../components/Analytics/AnalyticsChart";
import StatsCard from "../components/Analytics/StatsCard";
import RecentTasks from "../components/TaskManager/RecentTasks";

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        {/* Stats Cards */}
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <StatsCard title="Total Focus Time" value="12h 34m" color="#E3F2FD" />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatsCard title="Sessions Completed" value="28" color="#E8F5E9" />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatsCard title="Tasks Completed" value="45" color="#F3E5F5" />
            </Grid>
          </Grid>
        </Grid>

        {/* Analytics Chart */}
        <Grid item xs={12}>
          <AnalyticsChart />
        </Grid>

        {/* Recent Tasks */}
        <Grid item xs={12}>
          <RecentTasks />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;