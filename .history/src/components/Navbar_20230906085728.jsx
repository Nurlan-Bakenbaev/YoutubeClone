import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { WidthFull } from "@mui/icons-material";

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
        height: "60px",
        margin:'0 auto'
        wid
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "red",
        }}
      >
        <Link className="uppercase" to={"/"}>
          U-tuber
        </Link>
      </Stack>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
