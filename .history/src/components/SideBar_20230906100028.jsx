import React from "react";
import { Stack } from "@mui/material";
import { categories } from "./helpers/constants";

const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{ overflowY: "auto", 
      height: { sx: "auto", md: "95%" },
    flexDirection:{md:'col'} }}
    >
      {categories.map((cat) => (
        <button className="text-white">
          <span> {cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
