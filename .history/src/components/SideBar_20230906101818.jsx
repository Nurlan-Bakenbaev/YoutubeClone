import React from "react";
import { Stack } from "@mui/material";
import { categories } from "./helpers/constants";

const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "90%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <button class=" flex gap-2 items-center hover:bg-red-500 focus:ring-red-600 focus:outline-none text-white font-bold py-1.5 px-2  rounded-xl">
          <span > {cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
