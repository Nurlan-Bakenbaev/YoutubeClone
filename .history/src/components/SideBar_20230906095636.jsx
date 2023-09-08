import React from "react";
import { Stack } from "@mui/material";
import { categories } from "./helpers/constants";

const SideBar = () => {
  return (
    <Stack
      direction={row}
      sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" } }}>

{categories.map((cat)=>(
    <button>
        soa
    </button>
))}
      </Stack>
  );
};

export default SideBar;
