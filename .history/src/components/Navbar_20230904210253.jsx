import { Stack } from "@mui/material";

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
        <Link></Link>
      </Stack>
  );
};

export default Navbar;
