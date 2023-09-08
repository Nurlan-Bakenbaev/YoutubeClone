import React from "react";
import { Stack } from "@mui/material";
import { categories } from "./helpers/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
 const {}
 
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: { sx: 5, md: 5 },
        overflowY: "",
        overflowX: "auto",
        height: { sx: "auto", md: "100%" },
        flexDirection: { md: "column" },
      }}>
      {categories.map((cat) => (
        <button
          onClick={() => setSelectedCategory(cat.name)}
          key={cat.name}
          style={{ background: cat.name === selectedCategory && "red" }}
          className="
        flex gap-2 items-center
         hover:bg-red-500 text-white 
          py-2 px-3 rounded-xl opacity-[0.7] hover:opacity-[1]"
        >
          <span>{cat.icon}</span>
          <span className="hidden md:block">{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
