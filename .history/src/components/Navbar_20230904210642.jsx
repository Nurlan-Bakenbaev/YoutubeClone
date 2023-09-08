import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      p={"2"}
      sx={{
        position: "sticky",
        background: "black",
        top: "0",
        justifyContent: "space-between",
      }}>
      <Link to={"/"} className="flex items-center h-[45px]">
        <h>Youtube Clone</h1>
      </Link>
    </Stack>
  );
};

export default Navbar;
