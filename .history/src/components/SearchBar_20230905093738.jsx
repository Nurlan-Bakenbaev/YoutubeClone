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
        width: "400px", // Set a fixed width
        height: "auto", // Let it adjust the height automatically
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar flex-1 p-2"
        placeholder="Search..."
        type="text"
        onChange={() => {}}/>
      
    </Paper>
  );
};

export default SearchBar;
