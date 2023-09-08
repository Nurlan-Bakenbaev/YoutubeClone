import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "./helpers/constants";

const ChannelCard = ({ channelDetails }) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
      <CardContent sx={{display:'flex',flexDirection:'co'}}> </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
