import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

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
        pl:'30px'
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
           <img width={40} src="https://cdn.logojoy.com/wp-content/uploads/20200406092725/youtube-icon.png" alt="logo" /> <h1 className="font-bold  text-[#ff6e40]">NUR-TUBE</h1> 
        </Link>
      </Stack>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
