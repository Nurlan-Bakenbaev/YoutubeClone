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
      }}
    >
        <Stack sx={{display:'flex',flexDirection:'row',alignItems:'center',color:'red'}}>
            <Link to={'/'}>U-tuber</Link>
        </Stack>
        <SearchBar/>
    </Stack>
  );
};

export default Navbar;
