import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={() => {
        handleSubmit;
      }}
      sx={{
        borderRadius: "20px",
        pl: 2,
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        minWidth: "40%",
        mr: { sm: 5 },
      }}
    >
      <input
        className="flex-1 p-1 outline-none"
        placeholder="Search..."
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "black" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
