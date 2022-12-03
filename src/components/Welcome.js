import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const Welcome = () => {
  return (
    <Card sx={{ margin: 6 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="salestrekker"
            src="https://www.helloworld.rs/public/files/_thumb/200x200/public/company/1442/2/Salestrekker.png"
          />
        }
       
        title="Salestrekker"
        subheader="Decembre 04, 2022"
      />
      <CardMedia
        component="img"
        height="600"
        image="https://sadowworkerscomplaw.com/wp-content/uploads/2021/02/SalaryCalculatorScreen.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography  variant='h5' fontWeight={200} color="text.secondary">
          This is test for job application by Salestrekker.<br/>
          Calculate your Salary.
        </Typography>
      </CardContent>
   
    </Card>
  );
};

export default Welcome;
