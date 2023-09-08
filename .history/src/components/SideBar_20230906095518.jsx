import React from "react";
import { Stack } from "@mui/material";
import { categories } from "./helpers/constants";

const SideBar = () => {
  return (
    <Stack
      direction={row}
      sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" } }}>
{categories.map((categorie)=>)(
    <button> 
        <span> </span>
    </button>
)}
      </Stack>
  );
};

export default SideBar;
