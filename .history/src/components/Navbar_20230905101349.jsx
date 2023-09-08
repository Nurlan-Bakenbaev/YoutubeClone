import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack className="conteiner"
      direction="row"
      alignItems="center"
      p={"2"}
      sx={{
        position: "sticky",
        background: "black",
        top: "0",
        justifyContent: "space-between",
      }}
    >
        <Stack sx={{display:'flex',flexDirection:'row',alignItems:'center',color:'red'}}>
            <Link className="uppercase" to={'/'}>U-tuber</Link>
        </Stack>
        <SearchBar/>
    </Stack>
  );
};

export default Navbar;
