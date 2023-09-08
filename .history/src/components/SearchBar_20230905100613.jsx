import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: "20px",
        pl: 2,
        boxShadow: "none",
        display: "flex",  // Use flex display
        alignItems: "center", // Vertically align content
        width: "400px",
        height: "auto",
        mr: { sm: 5 },
      }}
    >
      <input
        className="flex-1 p-1 outline-none"
        placeholder="Search..."
        type="text"
        onChange={() => {}}/>
      <IconButton type="submit" sx={{ p: "10px", color: "black" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
