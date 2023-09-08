import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => (
  <Box minHeight="95vh">
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
     <h1>Loading</h1>
    </Stack>
  </Box>
);

export default Loader;
