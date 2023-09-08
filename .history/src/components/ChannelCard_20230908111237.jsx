import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "./helpers/constants";

const ChannelCard = ({ channelDetails }) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetails?.snippet?.title}
           sx={{borderRadius:'50%',
            height:'180px',
            width:'180px',
            mb:2, border:'1px solid white'}}/>
            <Typography variant="h6">
              { channelDetails?.snippet?.title}
            </Typography>
            {}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
