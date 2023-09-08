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
        border: "1px solid lightgray",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="w-full "
        placeholder="Search..."
        type="text"
        value=""
        onChange={() => {}}/> 
        <IconButton type="submit" sx={{p:'10px',color:'red'}}>
        <SearchIcon/>
        </IconButton>
    </Paper>
  );
};

export default SearchBar;
