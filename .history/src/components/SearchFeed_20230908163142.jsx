import React, { useState, useEffect } from "react";
import { Box,Typography } from "@mui/material";
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
      
    </Stack>
  );
};

export default Feed;
