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
        pl:
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
        <Link className="uppercase hidden md:block" to={"/"}>
          U-tuber
        </Link>
      </Stack>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
