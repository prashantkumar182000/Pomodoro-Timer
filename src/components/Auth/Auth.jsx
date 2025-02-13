import React, { useState } from "react";
import { Paper, Typography, TextField, Button, Link } from "@mui/material";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Auth = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signed up successfully!");
    } catch (error) {
      alert("Error signing up: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      {user ? (
        <div>
          <Typography variant="h6" gutterBottom>
            Welcome, {user.email}
          </Typography>
          <Button variant="contained" color="error" fullWidth onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <Typography variant="h6" gutterBottom>
            {isLogin ? "Login" : "Sign Up"}
          </Typography>
          <TextField
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={isLogin ? handleLogin : handleSignUp}
            sx={{ mb: 2 }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          <Typography variant="body2" align="center">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link
              component="button"
              onClick={() => setIsLogin(!isLogin)}
              sx={{ color: "primary.main" }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </Link>
          </Typography>
        </div>
      )}
    </Paper>
  );
};

export default Auth;