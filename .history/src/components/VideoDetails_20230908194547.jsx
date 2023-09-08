import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "./helpers/fetchFromAPI";
import { Videos } from "./Videos";

const VideoDetails = () => {
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            </>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
