import React, { useState } from "react";
import { Paper, Typography, Button, ButtonGroup } from "@mui/material";

const SoundPlayer = () => {
  const [sound, setSound] = useState(null);
  const [activeSound, setActiveSound] = useState(null);

  const playSound = (soundFile, soundName) => {
    if (sound) sound.pause();
    const newSound = new Audio(soundFile);
    newSound.loop = true;
    newSound.play();
    setSound(newSound);
    setActiveSound(soundName);
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Background Sounds
      </Typography>
      <ButtonGroup fullWidth>
        {["Rain", "Ocean", "Forest"].map((soundName) => (
          <Button
            key={soundName}
            variant={activeSound === soundName ? "contained" : "outlined"}
            onClick={() => playSound(`/sounds/${soundName.toLowerCase()}.mp3`, soundName)}
          >
            {soundName}
          </Button>
        ))}
      </ButtonGroup>
    </Paper>
  );
};

export default SoundPlayer;