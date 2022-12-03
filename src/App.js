import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        height={"100vh"}
      >
        <Stack direction="row" spacing={2} justifyContent="space-between">
        
          <Router>
          <Sidebar mode={mode} setMode={setMode} />
            <Routes>
              
             
            </Routes>
          </Router>
          
        </Stack>
        
      </Box>
    </ThemeProvider>
  );
}

export default App;
