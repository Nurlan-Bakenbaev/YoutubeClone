import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <Paper
      component={"form"}
      onSubmit={() => {}}
      sx={{
        borderRadius: "20px",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none "
        placeholder="Search..."
        type="text"
        
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "black" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
