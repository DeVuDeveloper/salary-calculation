import React from 'react'
import { Avatar, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block"} }} >
      <Box position="fixed" width={300}>
    
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Salestrekker Interview Test
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5} sx={{mr: {md: 8, lg: 0}}}>
          <ImageListItem>
            <img
              src="https://www.salestrekker.com/images/services/main-fbrowser.png"
              alt="salestrekker"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://play-lh.googleusercontent.com/7Eria2E8kKP3RyXP-1wS-Yrtn57R3CMs2VzZj85t4r8re2S-UXGbeOERhxNh-mnsMMk"
              alt="salestrekker"
            />
          </ImageListItem>
          <ImageListItem>
            <img
        
              src="https://australianfintech.com.au/wp-content/uploads/sites/7/2022/03/Partnership-digital.png"
              alt="salestrekker"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Requrements
        </Typography>
        <List sx={{ width: {md: '80%', lg: '100%'}, maxWidth: 300, bgcolor: 'background.paper'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="salestrekker" src="https://www.helloworld.rs/public/files/_thumb/200x200/public/company/1442/2/Salestrekker.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Requrement 1"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Salestrekker
                  </Typography>
                  {" — Create a minimal SPA from scratch, using specified frameworks. Using core frameworks for just essential definitions/resets should be fine, but the idea is to see if the candidate can work with UI controls, customise the styles, follow the predefined guidelines and use the defined frameworks."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="salestrekker" src="https://www.helloworld.rs/public/files/_thumb/200x200/public/company/1442/2/Salestrekker.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Requirement 2"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Salestrekker
                  </Typography>
                  {' — To build an input form/calculator for checking gross and net income. Imagine you need to provide information to users about their clients income, before and after tax. One screen can be used for data entry and the second screen a table with results. You don\'t need to worry about using an exact tax % figure, you can choose how much tax goes for net income calculation.'}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar