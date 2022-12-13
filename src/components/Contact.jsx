import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
  
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 5,
    margin: 5
  })

  return (
    <>
      
      <StyledModal
        open={open}
        onClose={ e => setOpen(false) }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} borderRadius={5} bgcolor="background.default" color={"text.primary"} padding={2}>
          <Typography variant='h6' color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar 
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400" 
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Etinosa Ogbevoen
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="filled-multiline-static"
            multiline
            rows={3}
            placeholder="what's on your mind?"
            variant="filled"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button>POST</Button>
            <Button variant="outlined" sx={{width: "100px"}}><DateRange /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Contact;