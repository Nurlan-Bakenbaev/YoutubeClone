import React from "react";
import { Stack } from "@mui/material";
import { categories } from "./helpers/constants";

const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{ overflowY: "auto", 
      height: { sx: "auto", md: "95%" },
    flexDirection:{md:'column'} }}>
      {categories.map((cat) => (
        <button class=" hover:bg-blue-600 active:bg-red focus:ring-blue-300 focus:outline-none text-white font-bold py-2 px-4 rounded" >
          <span> {cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
