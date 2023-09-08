import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "./helpers/fetchFromAPI";

const Feed = () => {
  const [videos, setVideous] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=
    ${selectedCategory}`).then((data) => setVideous(data.items));
  }, [selectedCategory]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "100vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        <span className="text-red-500">{selectedCategory}</span> videos
        <Videos videos={videos} />
      </Typography>
    </Box>
  );
};

export default Feed;
