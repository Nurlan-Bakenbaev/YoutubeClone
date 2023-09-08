import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "./helpers/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideous] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=
    ${selectedCategory}`).then((data) => setVideous(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, border:'1px ' }}>
      <Box
        sx={{
          height: { sx: "auto", md: "95vh" },
          borderRight: "1px solid #878787 ",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          Copyrights 2023 Nurlan-Develop
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          <span className="text-red-500">{selectedCategory}</span> videos
          <Videos videos={videos} />
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
