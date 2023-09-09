import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SignIn from "./SignIn";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        background: "black",
        top: "0",
        justifyContent: "space-between",
        height: "80px",
        pl: "30px",
        marginBottom: "20px",
        px: {sm:},
        boxShadow: "0px 4px 6px white(0, 0, 0, 0.1)",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Link className="hidden md:flex items-center gap-2" to={"/"}>
          <img
            width={45}
            src="https://cdn.logojoy.com/wp-content/uploads/20200406092725/youtube-icon.png"
            alt="logo"
          />
          <h1 className="hidden lg:block font-bold text-2xl text-[#ff6e40]">NUR-TUBE</h1>
        </Link>
      </Stack>
      <SearchBar />
      <SignIn />
    </Stack>
  );
};

export default Navbar;
