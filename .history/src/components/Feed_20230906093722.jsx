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
          <Typography className="copyright" variant="body2" > Copyrights </Typography>
        </Box>
    </Stack>
  );
};

export default Feed;
