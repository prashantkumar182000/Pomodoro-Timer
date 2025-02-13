import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Home, BarChart, Settings } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/", icon: <Home /> },
    { name: "Dashboard", path: "/dashboard", icon: <BarChart /> },
    { name: "Settings", path: "/settings", icon: <Settings /> },
  ];

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Pomodoro Pro
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        }}
      >
        <Toolbar /> {/* Spacer for AppBar */}
        <List>
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <ListItem button selected={router.pathname === item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <main style={{ flexGrow: 1, padding: "24px" }}>
        <Toolbar /> {/* Spacer for AppBar */}
        <Component {...pageProps} user={user} setUser={setUser} />
      </main>
    </div>
  );
}

export default MyApp;