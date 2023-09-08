import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "autp" },
          borderRight: "1px solid red",
        }}></Box>
    </Stack>
  );
};

export default Feed;
