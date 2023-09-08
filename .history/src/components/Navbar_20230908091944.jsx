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
          color: "red",
        }}
      >
        <Link className="uppercase hidden md:block" to={"/"}>
          <img className="rounded-l" src="https://firebasestorage.googleapis.com/v0/b/todoapp-78b9b.appspot.com/o/Logo.png?alt=media&token=0902cd36-b999-488b-b332-c67ebfc55618" alt="Logo" />
        </Link>
      </Stack>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
