import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid gray", px:{sx:0,md:2}
        }}>
          SideBar
          <Typography className="cop"> Copyright </Typography>
        </Box>
    </Stack>
  );
};

export default Feed;
