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
        <Link className="flex text-white items-center h-[45px]" to={'/'}>
          Youtube-Clone
        </Link>
      </Stack>
  );
};

export default Navbar;
