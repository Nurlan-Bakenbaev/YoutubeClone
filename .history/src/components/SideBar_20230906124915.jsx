import React from "react";
import { Stack } from "@mui/material";
import { categories } from "./helpers/constants";

const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: { sx: 5, md: 5 },
        overflowY: "hidden",
        overflowX:'hidden'
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <button
          class="
        flex gap-2 items-center
         hover:bg-red-500 text-white 
         font-bold py-1.5 px-3 rounded-xl"
        >
          <span>{cat.icon}</span>
          <span className="hidden md:block">{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
