import React from 'react'
import { Avatar, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block"} }} >
      <Box position="fixed" width={300}>
    
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Calculate Your Salary
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5} sx={{mr: {md: 8, lg: 0}}}>
          <ImageListItem>
            <img
              src="https://thumbs.dreamstime.com/z/red-word-salary-electronic-calculator-isolated-d-illustration-payroll-calculation-word-display-calculator-147409539.jpg"
              alt="salestrekker"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-vector/net-income-calculating-abstract-concept-illustration-salary-calculation-net-income-formula-take-home-pay-corporate-accounting-calculating-earnings-profit-estimation_335657-1238.jpg?w=2000"
              alt="salestrekker"
            />
          </ImageListItem>
          <ImageListItem>
            <img
        
              src="https://newdocer.cache.wpscdn.com/photo/20190820/163c3fb4c1084f668116d4fe8800e049.jpg"
              alt="salestrekker"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Summary
        </Typography>
        <List sx={{ width: {md: '80%', lg: '100%'}, maxWidth: 300, bgcolor: 'background.paper'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="salestrekker" src="https://www.pngitem.com/pimgs/m/394-3942147_salary-icon-png-download-donate-icon-no-background.png" />
            </ListItemAvatar>
            <ListItemText
              primary=""
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                   
                  </Typography>
                  {" — An awesome desktop and mobile application for counting your weekly, fortnightly, monthly and annually net salary."}
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