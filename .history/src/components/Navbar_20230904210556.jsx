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
        <Link className="flex items-center h-[45px]" to={'/'}>
         <h1>Youtube</h1>
        </Link>
      </Stack>
  );
};

export default Navbar;
