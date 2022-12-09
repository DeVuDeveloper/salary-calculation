import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import Rightbar from './components/common/Rightbar';
import Hamburger from './components/common/Hamburger';
import Home from './pages/Home';
import NotFound from './pages/404';
import Salary from './pages/Salary';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './app.css';

function App () {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'} height={'100vh'}>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Router>
            <Sidebar mode={mode} setMode={setMode} />
            <Hamburger />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='salary' element={<Salary />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Router>
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
