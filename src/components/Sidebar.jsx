import React from 'react'
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Calculate, Home, ModeNight } from '@mui/icons-material'

const Sidebar = ({ mode, setMode }) => {
  
  return (
    <Box 
      flex={1} 
      p={2} 
      sx={{ display: { xs: "none", sm: "block"} }}
    >
      <Box position="fixed">
        <List>
        <ListItem disablePadding button component={NavLink} to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} activeclassname="active" style={({ isActive }) => ({
                paddingBottom: isActive ? '10px' : '5px',
                borderBottom: isActive ? '2px solid #376e6f' : '',
              })}>

            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="salary" className={({ isActive }) => (isActive ? 'active' : 'inactive')}  activeclassname="active"  style={({ isActive }) => ({
                paddingBottom: isActive ? '10px' : '5px',
                borderBottom: isActive ? '2px solid #376e6f' : '',
              })}>
              <ListItemIcon>
                <Calculate />
              </ListItemIcon>
              <ListItemText primary="Salary" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={ e => setMode(mode === "light" ? "dark" : "light") }/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar;