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
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        border: "1px solid red",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "100" },
          borderRight: "1px solid #878787 ",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "1ßß", flex: 2 }}>
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
