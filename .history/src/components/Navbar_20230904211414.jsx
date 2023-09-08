import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
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
      <Link to={"/"}>
        <><span className="text-red-500"><YouTubeIcon/></span>UTuber</h3>
      </Link>
    </Stack>
  );
};

export default Navbar;
