import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Paper, Typography } from "@mui/material";

// Register all Chart.js components
Chart.register(...registerables);

const AnalyticsChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Store the chart instance

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy the previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create a new chart instance
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Focus Time (hours)",
              data: [2, 3.5, 2.8, 4, 3.2, 5, 4.5],
              borderColor: "#3B82F6",
              tension: 0.4,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "top" },
          },
        },
      });
    }

    // Cleanup: Destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Weekly Progress
      </Typography>
      <canvas ref={chartRef} />
    </Paper>
  );
};

export default AnalyticsChart;