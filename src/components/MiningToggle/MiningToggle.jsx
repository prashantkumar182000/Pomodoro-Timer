import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  FormControlLabel,
  Switch,
  Alert,
  AlertTitle,
} from "@mui/material";

const MiningToggle = () => {
  const [mining, setMining] = useState(false);
  const [miner, setMiner] = useState(null);
  const [adsEnabled, setAdsEnabled] = useState(true); // Ads are enabled by default
  const [premiumFeaturesEnabled, setPremiumFeaturesEnabled] = useState(false); // Premium features are disabled by default

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load CoinImp script dynamically
      const script = document.createElement("script");
      script.src = "https://www.coinimp.com/scripts/coinhive.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Initialize miner with your public site key
        const _miner = new window.Client.Anonymous(
          "0b5d9d5c8d0213e9f79728218711613f3d8af12076a40b1aa22dff588b6259bb", // Public Key
          {
            throttle: 0.5, // Limit CPU usage to 50%
            c: "w", // Currency (w = Monero)
          }
        );
        setMiner(_miner);
      };
    }

    return () => {
      if (miner) miner.stop();
    };
  }, []);

  const toggleMining = () => {
    setMining(!mining);
    if (!mining && miner) {
      // Start mining
      miner.start();
      setAdsEnabled(false); // Disable ads
      setPremiumFeaturesEnabled(true); // Enable premium features
      // Add user-friendly notification
      miner.addMiningNotification(
        "Top",
        "Thank you for supporting us! Mining helps unlock premium features. You can disable it anytime.",
        "#f0f0f0", // Light grey background
        40, // Height: 40px
        "#333333" // Dark grey text
      );
    } else if (miner) {
      // Stop mining
      miner.stop();
      setAdsEnabled(true); // Re-enable ads
      setPremiumFeaturesEnabled(false); // Disable premium features
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Mining Toggle
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={mining}
            onChange={toggleMining}
            color="primary"
          />
        }
        label="Enable Mining (Support Premium Features)"
      />
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        By enabling mining, you help us provide free access to premium tools.
      </Typography>

      {/* Ads Enabled Alert */}
      {adsEnabled && (
        <Alert severity="warning" sx={{ mt: 2 }}>
          <AlertTitle>Ads Enabled</AlertTitle>
          Ads are enabled. Enable mining to experience the app ad-free.
        </Alert>
      )}

      {/* Premium Features Enabled Alert */}
      {premiumFeaturesEnabled && (
        <Alert severity="success" sx={{ mt: 2 }}>
          <AlertTitle>Premium Features Unlocked</AlertTitle>
          Premium features are now unlocked! Enjoy an ad-free experience.
        </Alert>
      )}
    </Paper>
  );
};

export default MiningToggle;