import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home";
import Salary from "./pages/Salary";

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import { useState } from "react"

function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} height={"100vh"}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Router>
            <Sidebar mode={mode} setMode={setMode} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="salary" element={<Salary />} />
            </Routes>
          </Router>
         
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
