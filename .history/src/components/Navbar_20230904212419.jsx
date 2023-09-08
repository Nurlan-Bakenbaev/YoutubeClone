import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
        <Stack sx={{display:'flex',flexDirection:'row',alignItems:'center',border}}>
            <Link to={'/'}><YouTubeIcon color="error" />U-tuber</Link>
        </Stack>
    </Stack>
  );
};

export default Navbar;
